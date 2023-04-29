import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import DefaultLayout from '@/common/layout/DefaultLayout';
import GlobalStyle from '@/styles/GlobalStyle';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ??
        (page => (
            <>
                <GlobalStyle />
                <DefaultLayout>{page}</DefaultLayout>
            </>
        ));

    return getLayout(
        <>
            <GlobalStyle />
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>,
    );
}
