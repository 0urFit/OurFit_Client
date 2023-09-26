import { ReactElement } from 'react';

import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import SaveDetail from '@/components/save/detail';
import wrapper from '@/store/store';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { GetServerSidePropsContext } from 'next/types';

const SaveDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <SaveDetail props={props} />;
};

SaveDetailPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            {page}
        </DL.PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async (ctx: GetServerSidePropsContext) => {
    return {
        props: { data: ctx.query },
    };
});

export default SaveDetailPage;
