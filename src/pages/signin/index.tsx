import { DL } from '@/common/layout/style';
import { ReactElement } from 'react';
import PrevButton from '@/common/molecules/PrevButton';

const SignIn = () => {
    return <>SignIn</>;
};

SignIn.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};

export default SignIn;
