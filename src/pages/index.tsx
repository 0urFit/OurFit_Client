import { ReactElement } from 'react';

import Login from '@/components/login';
import AuthLayout from '@/common/layout/AuthLayout';

import { TOKEN } from '@/utils/constants';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const LoginPage = () => {
    return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout isShowPrevBtn={false}>{page}</AuthLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { cookies } = ctx.req;

    if (Object.keys(cookies).includes(TOKEN.REFRESH_TOKEN_KEY)) {
        return {
            redirect: {
                destination: '/home',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default LoginPage;
