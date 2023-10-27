import axios from 'axios';

import Loading from '@/components/verifying';

import { SocialKakaoLogin } from '@/apis/apiService';
import { ServiceErrorMessage } from '@/apis/type';

import { VerifyingPagePropsType } from '@/components/verifying/type';
import { GetServerSidePropsContext, GetServerSideProps, InferGetServerSidePropsType } from 'next/types';

const VerifyingPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <Loading props={props} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { code, error_description } = ctx.query;

    const KAKAO_CODE = code as string;
    const verifyingPageProps: VerifyingPagePropsType = {
        accessToken: '',
        refreshToken: '',
        success: false,
        userInfo: {
            userEmail: '',
            userGender: '',
        },
    };

    const SocialLoginCancelMessage = {
        message: error_description === undefined ? null : error_description,
    };

    try {
        const response = await SocialKakaoLogin(KAKAO_CODE);

        const { success } = response.data;

        const { accessToken, refreshToken } = response.data.result;

        verifyingPageProps.accessToken = accessToken;
        verifyingPageProps.refreshToken = refreshToken;
        verifyingPageProps.success = success;
    } catch (error) {
        if (axios.isAxiosError<ServiceErrorMessage>(error) && error.response) {
            const { response } = error;
            const { status } = response;

            if (status === 404) {
                const { email, gender } = response.data.result;

                verifyingPageProps.userInfo.userEmail = email;
                verifyingPageProps.userInfo.userGender = gender || '';
            }
        }
    }

    return {
        props: {
            verifyingPageProps,
            SocialLoginCancelMessage,
        },
    };
};

export default VerifyingPage;
