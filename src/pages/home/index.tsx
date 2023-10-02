import Home from '@/components/home';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const HomePage = () => {
    return <Home />;
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

export default HomePage;
