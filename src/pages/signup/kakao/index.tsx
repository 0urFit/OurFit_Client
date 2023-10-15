import { ReactElement } from 'react';

import SignUpKakao from '@/components/signup/kakao';
import AuthLayout from '@/common/layout/AuthLayout';

const SignupKakaoPage = () => {
    return <SignUpKakao />;
};

SignupKakaoPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout isShowPrevBtn={true}>{page}</AuthLayout>;
};

export default SignupKakaoPage;
