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
import { ROUTES } from '@/route/routes';

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
            router.push(ROUTES.LOGIN);
        } else {
            const { accessToken, refreshToken, success, userInfo } = verifyingPageProps;

            if (success) {
                manageAccessToken.SET(accessToken);
                manageRefreshToken.SET(refreshToken);

                router.replace(ROUTES.HOME);
            } else {
                dispatch(saveUserInfo(userInfo));
                router.replace(ROUTES.SIGNUP_KAKAO);
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
