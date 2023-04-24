import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SI } from './style';
import { InputType } from './type';
import SubmitButton from '@/common/molecules/SubmitButton';
import InfoInput from '@/common/molecules/InfoInput';
import SelectBox from './SelectBox';
import { SignupData } from '@/data/SignUpData';
import EmailCheck from '@/apis/EmailCheck';
import { LocalNickname } from '@/apis/auth';

const SignUp = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<InputType>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
            nickname: '',
        },
    });
    const handleSignUp = (data: InputType) => {
        if (data.password === data.passwordCheck) {
            // EmailCheck(data.email).then(handleNickname(data));
            // SignUpSubmit(data);
            axios.all([EmailCheck(data.email), LocalNickname(data.nickname)]).then(
                axios.spread((response1, response2) => {
                    console.log(response1?.data);
                    console.log(response2?.data);
                })
            );
        } else {
            setError('passwordCheck', { type: 'passwordCheck', message: '비밀번호와 일치하지 않습니다' });
        }
    };

    return (
        <>
            <SI.InputList onSubmit={handleSubmit(handleSignUp)}>
                {SignupData.map(el => (
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
                <SI.ButtonWrapper>
                    <SubmitButton buttonValue="회원가입" />
                </SI.ButtonWrapper>
            </SI.InputList>
        </>
    );
};

export default SignUp;
