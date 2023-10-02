import Posts from '@/components/posts';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const PostPage = () => {
    return <Posts />;
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
