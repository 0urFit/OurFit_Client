import { useForm } from 'react-hook-form';
import { SI } from './style';
import { InputType } from './type';
import SubmitButton from '@/common/molecules/SubmitButton';
import InfoInput from '@/common/molecules/InfoInput';
import EmailCheck from '@/apis/EmailCheck';
import { SignupData } from '@/data/SignUpData';
import SelectBox from './SelectBox';

const SignUp = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputType>({
        defaultValues: {
            email: '',
            password: '',
            nickname: '',
        },
    });
    const handleSignUp = (data: InputType) => {
        console.log(data);
        if (data.password === data.passwordCheck) {
            EmailCheck(data.email).then(result => console.log(result));
        } else {
            console.log('비밀번호 틀림');
        }
    };
    console.log(errors);

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
                                        value: el.pattern ? el.pattern : '',
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
