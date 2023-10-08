import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';

import { GetRoutine } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import { SelectOptions } from '@/data/SaveData';

import { H } from './style';
import OurfitLogo from '../../../public/assets/Ourfit_logo.svg';

const Home = () => {
    const [routineList, setRoutineList] = useState([]);
    const [routineCategory, setRoutineCategory] = useState('all');

    const handleChangeCategory = (categoryData: string) => {
        setRoutineCategory(categoryData);
    };

    useEffect(() => {
        const getRoutineData = async (endpoint: string | undefined) => {
            try {
                const response = await GetRoutine(endpoint);
                const { result } = response.data;

                setRoutineList(result);
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        };

        getRoutineData(routineCategory);
    }, [routineCategory]);

    return (
        <H.Box>
            <H.LogoBox>
                <Image priority src={OurfitLogo} fill={true} alt="로고" />
            </H.LogoBox>
            <H.SelectBox>
                <SmallSelect placeholder={'운동종목'} options={SelectOptions} handleChangeCategory={handleChangeCategory} />
            </H.SelectBox>
            <H.RoutineListBox>
                {routineList.map(({ id, imgpath, period, liked, enrolled, fewTime, routineName, category }) => (
                    <RoutineCard key={id} id={id} imgpath={imgpath} period={period} enrolled={enrolled} fewTime={fewTime} routineName={routineName} category={category} liked={liked} />
                ))}
            </H.RoutineListBox>
            <H.BottomButtonWrapper>
                <BottomBar />
            </H.BottomButtonWrapper>
        </H.Box>
    );
};

export default Home;
