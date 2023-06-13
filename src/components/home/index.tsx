/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';

import { SelectOptions } from '@/data/SaveData';
import { tokenInstance } from '@/apis/client';

import { H } from './style';
import OurfitLogo from '../../../public/assets/Ourfit_logo.svg';
import getErrorMessage from '@/utils/getErrorMessage';

const Home = () => {
    const [routineList, setRoutineList] = useState([]);
    const [routineCategory, setRoutineCategory] = useState('all');

    const handleChangeCategory = (categoryData: string) => {
        setRoutineCategory(categoryData);
    };

    const getRoutineData = async (endpoint: string) => {
        try {
            const response = await tokenInstance.get(`/exercise/${endpoint}`);
            const { result } = response.data;

            setRoutineList(result);
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        switch (routineCategory) {
            case 'bodybuilding':
                getRoutineData('bodybuilding');
                break;
            case 'strength':
                getRoutineData('strength');
                break;
            case 'all':
                getRoutineData('all');
                break;
            default:
                setRoutineList([]);
        }
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
                {routineList.map(({ id, imgpath, period, fewTime, routineName, category }) => (
                    <RoutineCard key={id} id={id} imgpath={imgpath} period={period} fewTime={fewTime} routineName={routineName} category={category} />
                ))}
            </H.RoutineListBox>
            <H.BottomButtonWrapper>
                <BottomBar />
            </H.BottomButtonWrapper>
        </H.Box>
    );
};

export default Home;
