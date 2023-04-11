import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { DL } from './style';
import LeftArrowIcon from '../../../public/assets/left-arrow-icon.png';

interface propsType {
    children: ReactNode;
}

const DefaultLayout = ({ children }: propsType) => {
    const currentRoute = useRouter().pathname;
    console.log(currentRoute);

    return (
        <DL.PageLayout>
            {currentRoute === '/postCreate' ||
                currentRoute === '/postEdit' ||
                currentRoute === '/myPageLikes' ||
                (currentRoute === '/myPagePosts' && (
                    <DL.ImgWrapper>
                        <Image src={LeftArrowIcon} alt="left-arrow-icon" width="20" />
                    </DL.ImgWrapper>
                ))}
            <DL.SecondContainer>{children}</DL.SecondContainer>
        </DL.PageLayout>
    );
};

export default DefaultLayout;
