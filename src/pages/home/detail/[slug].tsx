import { ReactElement } from 'react';
import HomeDetail from '@/components/home/detail';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';
import DefaultLayout from '@/common/layout/DefaultLayout';

const HomeDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <HomeDetail props={props} />;
};

HomeDetailPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={false}>{page}</DefaultLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { routineId, liked } = ctx.query;
    const { cookies } = ctx.req;

    if (!cookies.refresh_token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const assure_routine_id = routineId as string;
    const assure_liked = liked as string;

    const converted_routine_id = parseInt(assure_routine_id);
    const converted_liked = Boolean(assure_liked);

    return {
        props: {
            converted_routine_id,
            converted_liked,
        },
    };
};

export default HomeDetailPage;
