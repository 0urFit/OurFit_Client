import { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import DefaultLayout from '@/common/layout/DefaultLayout';
import GlobalStyle from '@/styles/GlobalStyle';
import { wrapper } from '@/store/store';
import { Provider } from 'react-redux';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
    const { store } = wrapper.useWrappedStore(rest);

    const getLayout =
        Component.getLayout ??
        (page => (
            <>
                <GlobalStyle />
                <Provider store={store}>
                    <DefaultLayout>{page}</DefaultLayout>
                </Provider>
            </>
        ));

    return getLayout(
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>,
    );
}
