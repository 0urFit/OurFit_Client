import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import Bodybuilding from '@/components/save/detail/bodybuilding';

const BodybuildingPage = () => {
    return <Bodybuilding />;
};

BodybuildingPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            {page}
        </DL.PageLayout>
    );
};

export default BodybuildingPage;
