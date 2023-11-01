import { ReactElement } from 'react';

import DefaultLayout from '@/common/layout/DefaultLayout';
import Mypage from '@/components/mypage';

const ProfilePage = () => {
    return <Mypage />;
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
};

export default ProfilePage;
