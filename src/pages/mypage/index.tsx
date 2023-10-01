import Mypage from '@/components/mypage';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const ProfilePage = () => {
    return <Mypage />;
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

export default ProfilePage;
