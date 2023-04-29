import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SI } from '../style';
import { InputType } from '../type';
import InfoInput from '@/common/molecules/InfoInput';
import { SignupKakaoData } from '@/data/SignUpKakaoData';
import { LocalNickname, LocalSignUp } from '@/apis/auth';
import SelectBox from '../SelectBox';
import SubmitButton from '@/common/molecules/SubmitButton';
import { AgreeData } from '@/data/SignUpData';

const SignUpKakao = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError,
        getValues,
    } = useForm<InputType>({
        mode: 'onChange',
    });

    const [status, setStatus] = useState<boolean>(false);

    const handleSignUpKakao = (data: InputType) => {
        if (data.password === data.passwordCheck) {
            LocalNickname(data.nickname)
                .then(response => {
                    response?.data.code === 200 ? setStatus(true) : (setError('nickname', { type: 'existNickname', message: '이미 존재하는 닉네임입니다.' }), setStatus(false));
                })
                .catch(err => console.log(err));
        } else {
            setError('passwordCheck', { type: 'wrongPassword', message: '비밀번호와 일치하지 않습니다' });
        }
    };

    useEffect(() => {
        if (status) {
            LocalSignUp(getValues())
                .then(e => console.log(e))
                .catch(err => console.log(err));
        }
    }, [status]);

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
        if (isValid && allChecked) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }, [isValid, allChecked]);

    return (
        <>
            <SI.InputList onSubmit={handleSubmit(handleSignUpKakao)}>
                {SignupKakaoData.map(el => (
                    <SI.InputWrapper key={el.id}>
                        <SI.InputTitle>
                            {el.inputTitle}&nbsp;
                            {el.essential ? '*' : ''}
                        </SI.InputTitle>
                        {el.inputValue === 'gender' ? (
                            <SelectBox control={control} data={el} />
                        ) : (
                            <InfoInput
                                inputType={el.inputType}
                                inputValue={el.explanation}
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
                        {errors[el.inputValue]?.message && <SI.ErrorMessage>{errors[el.inputValue]?.message}</SI.ErrorMessage>}
                    </SI.InputWrapper>
                ))}
                <SI.CheckboxWrapper>
                    <SI.SelectAllWrapper>
                        <input type="checkbox" name="selectall" onChange={e => selectAll(e.target.checked)} checked={allChecked ? true : false} />
                        <SI.Span>전체 동의</SI.Span>
                    </SI.SelectAllWrapper>
                    {AgreeData.map(el => (
                        <SI.SelectEachWrapper key={el.id}>
                            <input type="checkbox" name="agreement" onChange={e => selectEach(e.target.checked, el.id)} checked={checkedList.includes(el.id) ? true : false} />
                            <SI.Span>{el.content}</SI.Span>
                        </SI.SelectEachWrapper>
                    ))}
                </SI.CheckboxWrapper>
                <SI.ButtonWrapper>
                    <SubmitButton buttonValue="회원가입" isValid={isChecked} />
                </SI.ButtonWrapper>
            </SI.InputList>
        </>
    );
};

export default SignUpKakao;
