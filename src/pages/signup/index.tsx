import { DL } from '@/common/layout/style';
import { ReactElement } from 'react';
import PrevButton from '@/common/molecules/PrevButton';
import SignUp from '@/components/signup';

const SignUpPage = () => {
    return <SignUp />;
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};

export default SignUpPage;
