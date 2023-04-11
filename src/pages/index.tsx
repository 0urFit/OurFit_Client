import { DL } from '@/common/layout/style';

export default function Login() {
    return <>로그임당</>;
}

Login.getLayout = function getLayout(page: any) {
    return (
        <DL.PageLayout>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};
