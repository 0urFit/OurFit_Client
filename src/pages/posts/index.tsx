import DefaultLayout from '@/common/layout/DefaultLayout';
import Posts from '@/components/posts';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';
import { ReactElement } from 'react';

const PostPage = () => {
    return <Posts />;
};

PostPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
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

export default PostPage;
