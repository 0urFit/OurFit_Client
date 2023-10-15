import { ReactElement } from 'react';

import SignUp from '@/components/signup';
import AuthLayout from '@/common/layout/AuthLayout';

const SignupPage = () => {
    return <SignUp />;
};

SignupPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout isShowPrevBtn={true}>{page}</AuthLayout>;
};

export default SignupPage;
