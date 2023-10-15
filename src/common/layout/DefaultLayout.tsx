import { ReactNode } from 'react';

import { DL } from './style';
import BottomBar from '../molecules/BottomBar';
import Image from 'next/image';
import logo from '/public/assets/Ourfit_logo.svg';

interface propsType {
    children?: ReactNode;
    isHeader: boolean;
}

const DefaultLayout = ({ children, isHeader }: propsType) => {
    return (
        <DL.PageLayout>
            {isHeader && (
                <DL.Header>
                    <Image width={100} height={50} src={logo} alt="로고이미지" />
                </DL.Header>
            )}
            <DL.Main $isHeader={isHeader}>{children}</DL.Main>
            <DL.Nav>
                <BottomBar />
            </DL.Nav>
            <div id="back-drop"></div>
            <div id="portal"></div>
        </DL.PageLayout>
    );
};

export default DefaultLayout;
