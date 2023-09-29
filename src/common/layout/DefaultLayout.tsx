import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import PrevButton from '../molecules/PrevButton';

import { DL } from './style';

interface propsType {
    children: ReactNode;
}

const DefaultLayout = ({ children }: propsType) => {
    const currentRoute = useRouter().pathname;

    return (
        <DL.PageLayout>
            {currentRoute === '/posts/create' || currentRoute === '/posts/edit' || currentRoute === '/mypage/likes' || currentRoute === '/mypage/posts' ? (
                <DL.ImgWrapper>
                    <PrevButton />
                </DL.ImgWrapper>
            ) : (
                ''
            )}
            <DL.SecondContainer>{children}</DL.SecondContainer>
            <div id="back-drop"></div>
            <div id="portal"></div>
        </DL.PageLayout>
    );
};

export default DefaultLayout;
