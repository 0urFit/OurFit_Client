/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';

import { SaveRoutineInfo } from '@/apis/auth';
import { tokenInstance } from '@/apis/client';
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

    const getRoutineData = async (endpoint: string) => {
        try {
            const response = await tokenInstance.get(`/exercise/${endpoint}`);
            const { result } = response.data;

            setRoutineList(result);
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    const handleSaveRoutine = async (routineId: number | undefined) => {
        try {
            const response = await SaveRoutineInfo(routineId);

            return response.data;
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
                {routineList.map(({ id, imgpath, period, enrolled, fewTime, routineName, category }) => (
                    <RoutineCard
                        key={id}
                        id={id}
                        imgpath={imgpath}
                        period={period}
                        enrolled={enrolled}
                        fewTime={fewTime}
                        routineName={routineName}
                        category={category}
                        handleButton={handleSaveRoutine}
                    />
                ))}
            </H.RoutineListBox>
            <H.BottomButtonWrapper>
                <BottomBar />
            </H.BottomButtonWrapper>
        </H.Box>
    );
};

export default Home;
