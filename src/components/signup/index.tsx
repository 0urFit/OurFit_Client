import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { SU } from './style';
import { InputType, StatusType, ErrorType } from './type';
import { AgreeData, SignupData } from '@/data/SignUpData';
import { LocalEmail, LocalNickname, LocalSignUp } from '@/apis/auth';
import SubmitButton from '@/common/molecules/SubmitButton';
import InfoInput from '@/common/molecules/InfoInput';
import ErrorMessage from '@/common/molecules/ErrorMessage';
import SelectBox from './SelectBox';

const SignUp = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError,
        setFocus,
    } = useForm<InputType>({
        mode: 'onChange',
    });
    const router = useRouter();

    const [status, setStatus] = useState<StatusType>({ email: false, nickname: false });
    const inputRef = useRef<HTMLInputElement>(null);

    const listener = (ev: FocusEvent) => {
        const targetName = ev.target as HTMLInputElement;
        if (targetName.name === 'email') {
            handleEmail(targetName.value);
        } else if (targetName.name === 'nickname') {
            handleNickname(targetName.value);
        } else {
            return;
        }
    };

    useEffect(() => {
        window.addEventListener('focusout', listener);

        return () => {
            window.removeEventListener('focusout', listener);
        };
    }, [inputRef]);

    const handleEmail = async (email: string) => {
        try {
            const result = await LocalEmail(email);
            setError('email', { type: 'existEmail', message: '이미 존재하는 이메일입니다.' }), setStatus(prev => ({ email: result.data.success, nickname: prev.nickname }));
        } catch (error) {
            const err = error as ErrorType;
            setStatus(prev => ({ email: err.response.data.success, nickname: prev.nickname }));
        }
    };

    const handleNickname = async (email: string) => {
        try {
            const result = await LocalNickname(email);
            setError('nickname', { type: 'existNickname', message: '이미 존재하는 닉네임입니다.' }), setStatus(prev => ({ email: prev.email, nickname: result.data.success }));
        } catch (error) {
            const err = error as ErrorType;
            setStatus(prev => ({ email: prev.email, nickname: err.response.data.success }));
        }
    };

    const handleSignUp = async (data: InputType) => {
        inputRef.current?.focus();
        if (data.password === data.passwordCheck) {
            try {
                await LocalSignUp(data);
                router.push('/');
            } catch (error) {
                console.log(error);
            }
        } else {
            setFocus('passwordCheck');
            setError('passwordCheck', { type: 'wrongPassword', message: '비밀번호와 일치하지 않습니다' });
        }
    };

    const [checkedList, setCheckedList] = useState<number[]>([]);
    const [allChecked, setAllChecked] = useState<boolean>(false);

    const selectEach = (checked: boolean, id: number) => {
        if (checked) {
            setCheckedList(addList => [...addList, id]);
        } else if (!checked && checkedList.includes(id)) {
            setCheckedList(checkedList.filter(el => el !== id));
        }
    };

    const selectAll = (checked: boolean) => {
        if (checked) {
            setCheckedList([0, 1, 2]);
        } else {
            setCheckedList([]);
        }
    };

    useEffect(() => {
        if (checkedList.length === 3) {
            setAllChecked(true);
        } else {
            setAllChecked(false);
        }
    }, [checkedList]);

    const [isChecked, setIsChecked] = useState<boolean>(true);

    useEffect(() => {
        if (status.email && status.nickname && isValid && allChecked) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }, [status, isValid, allChecked]);

    return (
        <SU.InputList onSubmit={handleSubmit(handleSignUp)}>
            {SignupData.map(el => (
                <SU.InputWrapper key={el.id}>
                    <SU.InputTitle>
                        {el.inputTitle}&nbsp;
                        {el.essential ? '*' : ''}
                    </SU.InputTitle>
                    {el.inputValue === 'gender' ? (
                        <SelectBox control={control} data={el} />
                    ) : (
                        <InfoInput
                            inputType={el.inputType}
                            explanation={el.explanation}
                            register={register(`${el.inputValue}`, {
                                required: el.essential,
                                minLength: {
                                    value: el.minLength ? el.minLength : 0,
                                    message: el.minLengthMessage ? el.minLengthMessage : '',
                                },
                                pattern: {
                                    value: el.pattern ? el.pattern : /^/,
                                    message: el.patternMessage ? el.patternMessage : '',
                                },
                            })}
                        />
                    )}
                    {errors[el.inputValue]?.message && <ErrorMessage errorText={errors[el.inputValue]?.message} />}
                </SU.InputWrapper>
            ))}
            <SU.CheckboxWrapper>
                <SU.SelectAllWrapper>
                    <input type="checkbox" name="selectall" onChange={e => selectAll(e.target.checked)} checked={allChecked ? true : false} />
                    <SU.Span>전체 동의</SU.Span>
                </SU.SelectAllWrapper>
                {AgreeData.map(el => (
                    <SU.SelectEachWrapper key={el.id}>
                        <input type="checkbox" name="agreement" onChange={e => selectEach(e.target.checked, el.id)} checked={checkedList.includes(el.id) ? true : false} />
                        <SU.Span>{el.content}</SU.Span>
                    </SU.SelectEachWrapper>
                ))}
            </SU.CheckboxWrapper>
            <SU.ButtonWrapper>
                <SubmitButton buttonValue="회원가입" isValid={isChecked} />
            </SU.ButtonWrapper>
        </SU.InputList>
    );
};

export default SignUp;
