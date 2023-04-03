import Image from 'next/image';
import EmailIcon from '../../../public/assets/email-icon.png';
import { LI } from './style';

const LoginInput = () => {
    return (
        <>
            <LI.InputWrapper>
                <LI.Input type="email" placeholder="Email" />
                <LI.ImgWrapper>
                    <Image src={EmailIcon} alt="save-icon" width={20} />
                </LI.ImgWrapper>
            </LI.InputWrapper>
        </>
    );
};

export default LoginInput;
