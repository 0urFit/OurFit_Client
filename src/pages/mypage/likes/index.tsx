import { ReactElement } from 'react';

import MypageLikes from '@/components/mypage/likes';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import DefaultLayout from '@/common/layout/DefaultLayout';
import AuthLayout from '@/common/layout/AuthLayout';

const MyPageLikesPage = () => {
    return <MypageLikes />;
};

MyPageLikesPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
};

MyPageLikesPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout isShowPrevBtn={true}>{page}</AuthLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { cookies } = context.req;

    if (!cookies.refresh_token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

export default MyPageLikesPage;
