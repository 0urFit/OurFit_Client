import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import HomeDetail from '@/components/home/detail';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';

const HomeDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <HomeDetail props={props} />;
};

HomeDetailPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            {page}
        </DL.PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { routineId } = ctx.query;
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

    const converted_routine_id = parseInt(assure_routine_id);

    return {
        props: {
            converted_routine_id,
        },
    };
};

export default HomeDetailPage;
