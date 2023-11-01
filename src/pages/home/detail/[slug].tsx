import { ReactElement } from 'react';

import HomeDetail from '@/components/home/detail';
import DefaultLayout from '@/common/layout/DefaultLayout';

import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';

const HomeDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <HomeDetail props={props} />;
};

HomeDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={false}>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { cookies } = ctx.req;
    const { routineId } = ctx.query;

    if (!cookies.refresh_token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const assure_routine_id = routineId as string;

    const converted_routine_id = parseInt(assure_routine_id);

    return {
        props: {
            converted_routine_id,
        },
    };
};

export default HomeDetailPage;
