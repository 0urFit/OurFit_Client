import { DL } from '@/common/layout/style';
<<<<<<< HEAD:src/pages/signin/index.tsx
import { ReactElement } from 'react';
import PrevButton from '@/common/molecules/PrevButton';
import SignIn from '@/components/signin';

const SignInPage = () => {
    return <SignIn />;
};

SignInPage.getLayout = function getLayout(page: ReactElement) {
=======
import LeftArrowIcon from '../../public/assets/left-arrow-icon.png';

const SignIn = () => {
    return <></>;
};

SignIn.getLayout = function getLayout(page: any) {
>>>>>>> 4cbb7b5 (chore: 세팅 수정):src/pages/signIn.tsx
    return (
        <DL.PageLayout>
            <DL.ImgWrapper>
                <PrevButton />
            </DL.ImgWrapper>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};

export default SignInPage;
