import { ReactElement } from 'react';

import DefaultLayout from '@/common/layout/DefaultLayout';

import Save from '@/components/save';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const SavePage = () => {
    return <Save />;
};

SavePage.getLayout = function getLayout(page: ReactElement) {
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

export default SavePage;
