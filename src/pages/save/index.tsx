import { ReactElement } from 'react';

import DefaultLayout from '@/common/layout/DefaultLayout';
import Save from '@/components/save';

const SavePage = () => {
    return <Save />;
};

SavePage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
};

export default SavePage;
