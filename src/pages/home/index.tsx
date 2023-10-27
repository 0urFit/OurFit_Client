import DefaultLayout from '@/common/layout/DefaultLayout';
import Home from '@/components/home';

import { ReactElement } from 'react';

const HomePage = () => {
    return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
};

export default HomePage;
