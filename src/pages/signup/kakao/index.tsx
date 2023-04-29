import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';
import SignUpKakao from '@/components/signup/kakao';

const SignUpKakaoPage = () => {
    return <SignUpKakao />;
};

SignUpKakaoPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};

export default SignUpKakaoPage;
