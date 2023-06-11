import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import SaveDetail from '@/components/save/detail';

const SaveDetailPage = () => {
    return <SaveDetail />;
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

export default SaveDetailPage;
