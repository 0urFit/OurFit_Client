import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { SU } from '../style';
import { InputType, ErrorType } from '../type';
import { AgreeData } from '@/data/SignUpData';
import { SignupKakaoData } from '@/data/SignUpKakaoData';
import { LocalNickname, LocalSignUp } from '@/apis/auth';
import { RootState } from '@/store/store';
import SelectBox from '../SelectBox';
import InfoInput from '@/common/molecules/InfoInput';
import SubmitButton from '@/common/molecules/SubmitButton';
import ErrorMessage from '@/common/molecules/ErrorMessage';

const SignUpKakao = () => {
    const { user } = useSelector((value: RootState) => value);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError,
    } = useForm<InputType>({
        mode: 'onChange',
        defaultValues: {
            email: user.userEmail,
        },
    });
    const router = useRouter();

    const [status, setStatus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const listener = (ev: FocusEvent) => {
        const targetName = ev.target as HTMLInputElement;
        if (targetName.name === 'nickname') {
            handleNickname(targetName.value);
        } else {
            return;
        }
    };

    useEffect(() => {
        document.addEventListener('focusout', listener);

        return () => {
            document.removeEventListener('focusout', listener);
        };
    }, [inputRef]);

    const handleNickname = async (nickname: string) => {
        try {
            const result = await LocalNickname(nickname);
            setStatus(result.data.success);
        } catch (error) {
            const err = error as ErrorType;
            if (err.response?.status === 409) {
                setError('nickname', { type: 'existNickname', message: '이미 존재하는 닉네임입니다.' }), setStatus(err.response.data.success);
            }
        }
    };

    const handleSignUpKakao = async (data: InputType) => {
        inputRef.current?.focus();
        try {
            await LocalSignUp(data);
            router.push('/');
        } catch (error) {
            console.log(error);
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
        if (status && isValid && allChecked) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }, [status, isValid, allChecked]);

    return (
        <>
            <SU.InputList onSubmit={handleSubmit(handleSignUpKakao)}>
                {SignupKakaoData.map(el => (
                    <SU.InputWrapper key={el.id}>
                        <SU.InputTitle>
                            {el.inputTitle}&nbsp;
                            {el.essential ? '*' : ''}
                        </SU.InputTitle>
                        {el.inputValue === 'gender' ? (
                            <SelectBox control={control} data={el} defaultValue={user.userGender} />
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
        </>
    );
};

export default SignUpKakao;
