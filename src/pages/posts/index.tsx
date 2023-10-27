import { ReactElement } from 'react';

import DefaultLayout from '@/common/layout/DefaultLayout';
import Posts from '@/components/posts';

const PostPage = () => {
    return <Posts />;
};

PostPage.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout isHeader={true}>{page}</DefaultLayout>;
};

export default PostPage;
