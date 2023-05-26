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
    };

    try {
        const response = await SocialKakaoLogin(KAKAO_CODE);

        const { token, refreshToken } = response.data.result;
        const { success } = response.data;

        verifyingPageProps.accessToken = token;
        verifyingPageProps.refreshToken = refreshToken;
        verifyingPageProps.success = success;
    } catch (error: any) {
        console.log(error);
    }

    return {
        props: verifyingPageProps,
    };
});

export default VerifyingPage;
