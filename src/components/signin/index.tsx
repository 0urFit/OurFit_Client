import { useForm } from 'react-hook-form';
import { SI } from './style';
import { InputType } from './type';
import SubmitButton from '@/common/molecules/SubmitButton';
import InfoInput from '@/common/molecules/InfoInput';
import EmailCheck from '@/apis/EmailCheck';
import { SigninData } from '@/data/SignInData';

const SignIn = () => {
    const { register, handleSubmit } = useForm<InputType>();
    const handleSignIn = (data: InputType) => {
        if (data.password === data.passwordCheck) {
            // SignInAPI(data).then(result => console.log(result));
            EmailCheck(data.email).then(result => console.log(result));
        } else {
            console.log('비밀번호 틀림');
        }
    };

    return (
        <>
            <SI.InputList onSubmit={handleSubmit(handleSignIn)}>
                {SigninData.map(el => (
                    <SI.InputWrapper key={el.id}>
                        <SI.InputTitle>
                            {el.inputTitle}&nbsp;
                            {el.essential ? '*' : ''}
                        </SI.InputTitle>
                        {el.inputValue === 'gender' ? '' : <InfoInput inputType={el.inputType} inputValue={el.explanation} register={register(`${el.inputValue}`, { required: el.essential })} />}
                    </SI.InputWrapper>
                ))}
                <SubmitButton buttonValue="회원가입" />
            </SI.InputList>
        </>
    );
};

export default SignIn;
