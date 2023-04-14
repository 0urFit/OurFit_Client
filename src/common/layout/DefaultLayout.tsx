import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { DL } from './style';
import PrevButton from '../molecules/PrevButton';

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
        </DL.PageLayout>
    );
};

export default DefaultLayout;
