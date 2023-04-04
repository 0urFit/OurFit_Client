import Image from 'next/image';
import { LI } from './style';
import EmailIcon from '../../../public/assets/email-icon.png';

const LoginInput = () => {
    return (
        <LI.InputWrapper>
            <LI.Input placeholder="Email" />
            <LI.ImgWrapper>
                <Image src={EmailIcon} alt="email-icon" width={20} />
            </LI.ImgWrapper>
        </LI.InputWrapper>
    );
};

export default LoginInput;
