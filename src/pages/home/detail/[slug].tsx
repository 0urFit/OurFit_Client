import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import HomeDetail from '@/components/home/detail';

const HomeDetailPage = () => {
    return <HomeDetail />;
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

export default HomeDetailPage;
