import { DL } from '@/common/layout/style';
import Login from '@/components/login';
import { ReactElement } from 'react';

export default function LoginPage() {
    return <Login />;
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};
