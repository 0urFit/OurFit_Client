<<<<<<< HEAD:src/pages/posts/detail/index.tsx
import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';

const PostDetailPage = () => {
    return <>PostDetailPage</>;
};

PostDetailPage.getLayout = function getLayout(page: ReactElement) {
=======
import Image from 'next/image';
import { DL } from '@/common/layout/style';
import LeftArrowIcon from '../../public/assets/left-arrow-icon.png';

const PostDetail = () => {
    return <></>;
};

PostDetail.getLayout = function getLayout(page: any) {
>>>>>>> 4cbb7b5 (chore: 세팅 수정):src/pages/postDetail.tsx
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            {page}
        </DL.PageLayout>
    );
};

<<<<<<< HEAD:src/pages/posts/detail/index.tsx
export default PostDetailPage;
=======
export default PostDetail;
>>>>>>> 4cbb7b5 (chore: 세팅 수정):src/pages/postDetail.tsx
