import { DL } from '@/common/layout/style';
import { ReactElement } from 'react';

export default function LoginPage() {
    return <>LoginPage</>;
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};
