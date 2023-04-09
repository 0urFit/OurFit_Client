import { ReactNode } from 'react';
import { DL } from './style';
import { useRouter } from 'next/router';

interface propsType {
    children: ReactNode;
}

const DefaultLayout = (props: propsType) => {
    const router = useRouter();
    console.log(router.pathname);
    return <DL.Container>{props.children}</DL.Container>;
};

export default DefaultLayout;
