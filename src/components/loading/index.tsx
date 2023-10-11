import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { InferGetServerSidePropsType } from 'next/types';

import { getServerSideProps } from '@/pages/verifying';
import { useAppDispatch } from '@/store/hook';
import { saveUserInfo } from '@/store/slices/userSlice';
import { manageAccessToken } from '@/utils/manageLocalStorage';
import { manageRefreshToken } from '@/utils/manageCookie';

const override: React.CSSProperties = {
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
};

const Loading = ({ props: { verifyingPageProps, SocialLoginCancelMessage } }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { message } = SocialLoginCancelMessage;

    useEffect(() => {
        if (message) {
            router.push('/');
        } else {
            const { accessToken, refreshToken, success, userInfo } = verifyingPageProps;

            manageAccessToken.SET(accessToken);
            manageRefreshToken.SET(refreshToken);

            if (success) {
                router.replace('/home');
            } else {
                dispatch(saveUserInfo(userInfo));
                router.replace('/signup/kakao');
            }
        }
    }, []);

    return (
        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <BeatLoader size={20} color="#36d7b7" loading={true} cssOverride={override} />
        </div>
    );
};

export default Loading;
