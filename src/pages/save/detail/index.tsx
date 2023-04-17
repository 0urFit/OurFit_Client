import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';

const SaveDetail = () => {
    return <>SaveDetail</>;
};

SaveDetail.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            {page}
        </DL.PageLayout>
    );
};

export default SaveDetail;
