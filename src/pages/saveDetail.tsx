<<<<<<< HEAD:src/pages/save/detail/index.tsx
import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';

const SaveDetailPage = () => {
    return <>SaveDetailPage</>;
};

SaveDetailPage.getLayout = function getLayout(page: ReactElement) {
=======
import Image from 'next/image';
import { DL } from '@/common/layout/style';
import LeftArrowIcon from '../../public/assets/left-arrow-icon.png';

const SaveDetail = () => {
    return <></>;
};

SaveDetail.getLayout = function getLayout(page: any) {
>>>>>>> 4cbb7b5 (chore: 세팅 수정):src/pages/saveDetail.tsx
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
