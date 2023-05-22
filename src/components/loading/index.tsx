import React, { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/router';

import { useAppDispatch } from '@/store/hook';
import { SocialKakaoLogin } from '@/apis/auth';
import { setAccessToken } from '@/store/slices/authSlice';
import { setRefreshToken } from '@/utils/manageCookie';

import { AuthTokenType } from '@/store/slices/authSlice';

const override: React.CSSProperties = {
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
};

const Loading = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleGetTAccessToken = (authToken: AuthTokenType) => {
        dispatch(setAccessToken(authToken));
    };

    useEffect(() => {
        const getAuthCode = async () => {
            const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');

            try {
                const response = await SocialKakaoLogin(KAKAO_CODE);

                setRefreshToken(response.data.result.refreshToken);
                handleGetTAccessToken(response.data.result.token);

                router.push('/home');
            } catch (error) {
                router.push('/signup/kakao');
            }
        };

        getAuthCode();
    }, []);

    return (
        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <BeatLoader size={20} color="#36d7b7" loading={true} cssOverride={override} />
        </div>
    );
};

export default Loading;
