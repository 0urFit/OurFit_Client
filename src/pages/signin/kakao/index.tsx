import { ReactElement } from 'react';
import { DL } from '@/common/layout/style';
import PrevButton from '@/common/molecules/PrevButton';

const SignInKakao = () => {
    return <>SignInKakao</>;
};

SignInKakao.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};

export default SignInKakao;
