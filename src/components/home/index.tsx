import React from 'react';
import Image from 'next/image';

import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';

import { H } from './style';
import OurfitLogo from '../../../public/assets/Ourfit_logo.svg';

import { SelectOptions } from '@/data/SaveData';

const Home = () => {
    return (
        <>
            <H.LogoBox>
                <Image src={OurfitLogo} width={100} height={20} alt="로고" />
            </H.LogoBox>
            <H.SelectBox>
                <SmallSelect placeholder={'운동종목'} options={SelectOptions} />
            </H.SelectBox>
            <H.RoutineListBox>
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
                <RoutineCard />
            </H.RoutineListBox>
            <BottomBar />
        </>
    );
};

export default Home;
