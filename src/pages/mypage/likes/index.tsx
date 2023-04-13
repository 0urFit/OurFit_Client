import Image from 'next/image';
import { DL } from '@/common/layout/style';
import LeftArrowIcon from '../../../../public/assets/left-arrow-icon.png';
import { ReactElement } from 'react';

const MyPageLikes = () => {
    return <>MyPageLikes</>;
};

MyPageLikes.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <Image src={LeftArrowIcon} alt="left-arrow-icon" width="20" />
            </DL.ImgWrapper>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};

export default MyPageLikes;
