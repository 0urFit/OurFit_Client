import { ReactElement } from 'react';

import DefaultLayout from '@/common/layout/DefaultLayout';

import Home from '@/components/home';

const HomePage = () => {
    return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
};

export default HomePage;
