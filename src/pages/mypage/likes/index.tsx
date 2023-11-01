import { ReactElement } from 'react';

import MypageLikes from '@/components/mypage/likes';

import AuthLayout from '@/common/layout/AuthLayout';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const MyPageLikesPage = () => {
    return <MypageLikes />;
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
