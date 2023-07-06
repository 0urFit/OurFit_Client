import Image from 'next/image';
import { PP } from './style';

import preparing from '../../../public/assets/preparing.svg';

const Preparing = () => {
    return (
        <PP.PrepareBox>
            <PP.IconWrapper>
                <Image src={preparing} fill alt="서비스준비메시지" />
            </PP.IconWrapper>
            <PP.Message>서비스 준비중 입니다.</PP.Message>
        </PP.PrepareBox>
    );
};

export default Preparing;
