import Home from '@/components/home';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

export type PropsType = {
    cookie: string;
};

const HomePage = () => {
    return <Home />;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const { cookie } = req.headers;

    return {
        props: {
            cookie,
        },
    };
};

export default HomePage;
