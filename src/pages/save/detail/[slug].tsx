import { ReactElement } from 'react';

import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import SaveDetail from '@/components/save/detail';

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
            <div id="portal"></div>
            <div id="back-drop"></div>
        </DL.PageLayout>
    );
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
