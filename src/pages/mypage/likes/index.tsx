import { ReactElement } from 'react';

import MypageLikes from '@/components/mypage/likes';

import AuthLayout from '@/common/layout/AuthLayout';

const MyPageLikesPage = () => {
    return <MypageLikes />;
};

MyPageLikesPage.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout isShowPrevBtn={true}>{page}</AuthLayout>;
};

export default MyPageLikesPage;
