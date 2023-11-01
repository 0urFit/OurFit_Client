import { ReactElement } from 'react';

import SaveDetail from '@/components/save/detail';
import DefaultLayout from '@/common/layout/DefaultLayout';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { GetServerSidePropsContext } from 'next/types';

const SaveDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <SaveDetail props={props} />;
};

SaveDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={false}>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { cookies } = ctx.req;

    if (!cookies.refresh_token) {
        return {
            redirect: {
                destination: '/',

                permanent: false,
            },
        };
    }

    return {
        props: {
            data: ctx.query,
        },
    };
};

export default SaveDetailPage;
