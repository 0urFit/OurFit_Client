import { ReactNode } from 'react';
import { DL } from './style';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LeftArrowIcon from '../../../public/assets/left-arrow-icon.png';

interface propsType {
    children: ReactNode;
}

const DefaultLayout = (props: propsType) => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <DL.Container>
            <DL.ImgWrapper>
                <Image src={LeftArrowIcon} alt="left-arrow-icon" width="20" />
            </DL.ImgWrapper>
            {props.children}
        </DL.Container>
    );
};

export default DefaultLayout;
