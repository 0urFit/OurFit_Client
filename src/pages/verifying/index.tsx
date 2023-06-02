import { SocialKakaoLogin } from '@/apis/auth';
import Loading, { VerifyingPagePropsType } from '@/components/loading';
import wrapper from '@/store/store';
import { GetServerSidePropsContext, GetServerSideProps, InferGetServerSidePropsType } from 'next/types';

const VerifyingPage = (verifyingPageProps: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <Loading verifyingPageProps={verifyingPageProps} />;
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx: GetServerSidePropsContext) => {
    const { code } = ctx.query;
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

    try {
        const response = await SocialKakaoLogin(KAKAO_CODE);
        const { success } = response.data;

        const { token, refreshToken } = response.data.result;

        verifyingPageProps.accessToken = token;
        verifyingPageProps.refreshToken = refreshToken;
        verifyingPageProps.success = success;
    } catch (error: any) {
        const { response } = error;
        const { status } = response;

        if (status === 401) {
            const { email, gender } = response.data.result;

            verifyingPageProps.userInfo.userEmail = email;
            verifyingPageProps.userInfo.userGender = gender;
        }
    }

    return {
        props: verifyingPageProps,
    };
});

export default VerifyingPage;
