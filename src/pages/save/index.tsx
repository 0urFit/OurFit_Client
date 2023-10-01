import Save from '@/components/save';
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const SavePage = () => {
    return <Save />;
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

export default SavePage;
