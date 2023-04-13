import { DL } from '@/common/layout/style';
import { ReactElement } from 'react';

export default function Login() {
    return <>로그임당</>;
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <DL.PageLayout>
            <DL.FirstContainer>{page}</DL.FirstContainer>
        </DL.PageLayout>
    );
};
