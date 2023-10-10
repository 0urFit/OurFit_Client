import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import LoginInput from '@/common/molecules/LoginInput';
import ErrorMessage from '@/common/molecules/ErrorMessage';
import SubmitButton from '@/common/molecules/SubmitButton';

import { LocalLogin } from '../../apis/auth';
import { KAKAO_API_URL } from '../../apis/client';
import { manageRefreshToken } from '@/utils/manageCookie';

import { LI } from './style';
import OurtFitLogo from '../../../public/assets/Ourfit_logo.svg';
import MailIcon from '../../../public/assets/mail-icon.png';
import PadlockIcon from '../../../public/assets/padlock-icon.png';

import { LoginForm, IsUserState } from './type';
import { manageAccessToken } from '@/utils/manageLocalStorage';

const Login = () => {
    const router = useRouter();

    const [emailValidMsg, setEmailValidMsg] = useState(false);
    const [pwValidMsg, setPwValidMsg] = useState(false);
    const [isUser, setIsUser] = useState<IsUserState>({ checkUser: false, message: '' });

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

    const handleSuccess = async (userInfo: LoginForm) => {
        try {
            const response = await LocalLogin(userInfo);
            const { refreshToken, accessToken } = response.data.result;

            manageAccessToken.SET(accessToken);
            manageRefreshToken.SET(refreshToken);

            router.push('/home');
        } catch (e) {
            setPwValidMsg(true);
            setIsUser({
                checkUser: true,
                message: '등록되지 않은 회원정보입니다.',
            });
        }
    };

    const handleMoveSignUp = () => {
        router.push('/signup');
    };

    useEffect(() => {
        if (errors.email) {
            setEmailValidMsg(true);
            setIsUser(prev => {
                return {
                    ...prev,
                    checkUser: false,
                };
            });
        } else {
            setEmailValidMsg(false);
        }
    }, [errors.email]);

    useEffect(() => {
        if (errors.password) {
            setPwValidMsg(true);
            setIsUser(prev => {
                return {
                    ...prev,
                    checkUser: false,
                };
            });
        } else {
            setPwValidMsg(false);
        }
    }, [errors.password]);

    return (
        <LI.Box>
            <LI.LogoWrapper>
                <Image src={OurtFitLogo} width={100} height={20.45} alt="로고" />
            </LI.LogoWrapper>
            <LI.LoginForm onSubmit={handleSubmit(handleSuccess)}>
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
                {isUser.checkUser && <ErrorMessage errorText={isUser.message} />}
                <LI.LoginBtnWrapper>
                    <SubmitButton buttonValue="로그인" isValid={!isValid} />
                </LI.LoginBtnWrapper>
            </LI.LoginForm>
            {KAKAO_API_URL && (
                <Link href={KAKAO_API_URL}>
                    <LI.KakaoBtnWrapper>
                        <LI.KakaoBtn>카카오로 로그인</LI.KakaoBtn>
                    </LI.KakaoBtnWrapper>
                </Link>
            )}
            <LI.SignUpLinkBtnWrapper>
                <LI.SignUpLinkBtn onClick={handleMoveSignUp}>회원가입</LI.SignUpLinkBtn>
            </LI.SignUpLinkBtnWrapper>
        </LI.Box>
    );
};

export default Login;
