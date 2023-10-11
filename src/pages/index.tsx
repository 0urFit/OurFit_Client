import { ReactElement } from 'react';

import { DL } from '@/common/layout/style';
import Login from '@/components/login';

import { TOKEN } from '@/utils/constants';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

export default function LoginPage() {
    return <Login />;
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
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
