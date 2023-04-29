import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

import LoginInput from '@/common/molecules/LoginInput';
import ErrorMessage from '@/common/molecules/ErrorMessage';

import { LI } from './style';
import OurtFitLogo from '../../../public/assets/Ourfit_logo.png';
import MailIcon from '../../../public/assets/mail-icon.png';
import PadlockIcon from '../../../public/assets/padlock-icon.png';
import SubmitButton from '@/common/molecules/SubmitButton';

import { LoginForm } from './type';

import { LocalLogin } from '../../apis/auth';

const Login = () => {
    const [emailValidMsg, setEmailValidMsg] = useState<boolean | undefined>(false);
    const [pwValidMsg, setPwValidMsg] = useState<boolean | undefined>(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginForm>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const handleSuccess = () => {
        // api test
        const test = {
            email: 'aossuper7@naver.com',
            password: 'aossuper7',
        };
        LocalLogin(test).then(res => {
            console.log(res);
        });
        console.log('로그인 성공입니다.');
    };

    const handleFail = () => {
        console.log('로그인에 실패했습니다.');
    };

    useEffect(() => {
        errors.email ? setEmailValidMsg(true) : setEmailValidMsg(false);
    }, [errors.email]);

    useEffect(() => {
        errors.password ? setPwValidMsg(true) : setPwValidMsg(false);
    }, [errors.password]);

    return (
        <LI.Box>
            <LI.LogoWrapper>
                <Image src={OurtFitLogo} width={100} height={20.45} alt="로고" />
            </LI.LogoWrapper>
            <LI.LoginForm onSubmit={handleSubmit(handleSuccess, handleFail)}>
                <LoginInput
                    register={register('email', {
                        required: '이메일은 필수 입력란 입니다.',
                        pattern: {
                            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                            message: '이메일 형식과 다릅니다.',
                        },
                    })}
                    type="text"
                    placeholder="Email"
                    src={MailIcon.src}
                    alternative="이메일아이콘"
                    emailMargin={emailValidMsg}
                />
                {emailValidMsg && <ErrorMessage errorText={errors.email?.message} />}
                <LoginInput
                    register={register('password', {
                        required: '비밀번호는 필수 입력란 입니다.',
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
                            message: '비밀번호 형식과 다릅니다.',
                        },
                    })}
                    type="password"
                    placeholder="Password"
                    src={PadlockIcon.src}
                    alternative="비밀번호아이콘"
                    pwMargin={pwValidMsg}
                />
                {pwValidMsg && <ErrorMessage errorText={errors.password?.message} />}
                <LI.LoginBtnWrapper>
                    <SubmitButton buttonValue="로그인" isValid={!isValid} />
                </LI.LoginBtnWrapper>
            </LI.LoginForm>
            <LI.KakaoBtnWrapper>
                <LI.KakaoBtn onClick={() => signIn('kakao')}>카카오로 로그인</LI.KakaoBtn>
            </LI.KakaoBtnWrapper>
            <LI.SignUpLinkBtnWrapper>
                <LI.SignUpLinkBtn>회원가입</LI.SignUpLinkBtn>
            </LI.SignUpLinkBtnWrapper>
        </LI.Box>
    );
};

export default Login;
