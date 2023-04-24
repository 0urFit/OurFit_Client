import Image from 'next/image';
import LeftArrowIcon from '../../../public/assets/left-arrow-icon.png';
import { useRouter } from 'next/router';

const PrevButton = () => {
    const router = useRouter();

    const handlePrev = () => {
        router.back();
    };

    return (
        <div onClick={handlePrev}>
            <Image src={LeftArrowIcon} alt="left-arrow-icon" width="20" />
        </div>
    );
};

export default PrevButton;
