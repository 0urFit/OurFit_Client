import DefaultLayout from '@/common/layout/DefaultLayout';
import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </>
    );
}
