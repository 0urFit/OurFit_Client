import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { BeatLoader } from 'react-spinners';

import { getServerSideProps } from '@/pages/verifying';
import { useAppDispatch } from '@/store/hook';
import { saveUserInfo } from '@/store/slices/userSlice';
import { manageAccessToken } from '@/utils/manageLocalStorage';
import { manageRefreshToken } from '@/utils/manageCookie';

import { InferGetServerSidePropsType } from 'next/types';
import { isLoading, BeatLoaderColor, BeatLoaderSize, Box } from './style';

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

            if (success) {
                manageAccessToken.SET(accessToken);
                manageRefreshToken.SET(refreshToken);

                router.replace('/home');
            } else {
                dispatch(saveUserInfo(userInfo));
                router.replace('/signup/kakao');
            }
        }
    }, []);

    return (
        <Box>
            <BeatLoader size={BeatLoaderSize} color={BeatLoaderColor} loading={isLoading} cssOverride={override} />
        </Box>
    );
};

export default Loading;
