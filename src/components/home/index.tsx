import Image from 'next/image';
import { H } from './style';
import OurfitLogo from '../../../public/assets/Ourfit_logo.svg';
import React from 'react';
import SmallSelect from '@/common/molecules/SmallSelect';

const Home = () => {
    const test = [
        { value: 'all', label: 'all' },
        { value: 'diet', label: 'diet' },
        { value: 'strength', label: 'strength' },
        { value: 'bodybuilding', label: 'bodybuilding' },
    ];
    return (
        <>
            <H.LogoBox>
                <Image src={OurfitLogo} width={100} height={20} alt="로고" />
            </H.LogoBox>
            <H.SelectBox>
                <SmallSelect placeholder={'운동종목'} options={test} />
            </H.SelectBox>
        </>
    );
};

export default Home;
