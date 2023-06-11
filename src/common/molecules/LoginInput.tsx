import Image from 'next/image';
import { UseFormRegisterReturn } from 'react-hook-form';

import { LI } from './style';
interface LoginInputParameter {
    register?: UseFormRegisterReturn;
    type: string;
    placeholder: string;
    src: string;
    alternative: string;
    emailMargin?: boolean | undefined;
    pwMargin?: boolean | undefined;
}

const LoginInput = ({ register, type, placeholder, src, alternative, emailMargin, pwMargin }: LoginInputParameter) => {
    return (
        <LI.InputWrapper emailMargin={emailMargin} pwMargin={pwMargin}>
            <LI.Input {...register} type={type} placeholder={placeholder} />
            <LI.ImgWrapper>
                <Image src={src} alt={alternative} width={20} height={20} />
            </LI.ImgWrapper>
        </LI.InputWrapper>
    );
};

export default LoginInput;
