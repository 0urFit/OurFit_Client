import { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import GlobalStyle from '@/styles/GlobalStyle';
import wrapper from '@/store/store';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page);

    return getLayout(
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>,
    );
}

export default wrapper.withRedux(App);
