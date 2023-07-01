import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import HomeDetail from '@/components/home/detail';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';
import wrapper from '@/store/store';

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (ctx: GetServerSidePropsContext) => {
    const { routineId, liked } = ctx.query;

    const assure_routine_id = routineId as string;
    const assure_routine_liked = liked as string;

    const converted_routine_id = parseInt(assure_routine_id);
    const converted_routine_liked = JSON.parse(assure_routine_liked);

    return {
        props: {
            converted_routine_id,
            converted_routine_liked,
        },
    };
});

export default HomeDetailPage;
