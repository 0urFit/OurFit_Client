import { DL } from '@/common/layout/style';

export default function LoginPage() {
    return <>LoginPage</>;
}

<<<<<<< HEAD
LoginPage.getLayout = function getLayout(page: ReactElement) {
=======
Login.getLayout = function getLayout(page: any) {
>>>>>>> 4cbb7b5 (chore: 세팅 수정)
    return (
        <DL.PageLayout>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};
