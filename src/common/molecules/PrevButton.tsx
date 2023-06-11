import Image from 'next/image';
import LeftArrowIcon from '../../../public/assets/left-arrow-icon.png';
import { useRouter } from 'next/router';
import { PB } from './style';

const PrevButton = () => {
    const router = useRouter();

    const handlePrev = () => {
        router.back();
    };

    return (
        <PB.ImgWrapper onClick={handlePrev}>
            <Image src={LeftArrowIcon} alt="left-arrow-icon" width="20" />
        </PB.ImgWrapper>
    );
};

export default PrevButton;
