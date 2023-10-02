import { ReactElement } from 'react';

import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import MypageLikes from '@/components/mypage/likes';

import { GetServerSideProps, GetServerSidePropsContext } from 'next/types';

const MyPageLikesPage = () => {
    return <MypageLikes />;
};

MyPageLikesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            {page}
        </DL.PageLayout>
    );
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

export default MyPageLikesPage;
