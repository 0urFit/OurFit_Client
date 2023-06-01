/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';
import BottomBar from '@/common/molecules/BottomBar';

import { H } from './style';
import OurfitLogo from '../../../public/assets/Ourfit_logo.svg';

import { SelectOptions } from '@/data/SaveData';
import { tokenInstance } from '@/apis/client';

export interface RoutineProps {
    id?: number | undefined;
    imgpath: string;
    period?: number;
    fewTime?: number;
    routineName?: string;
    category?: string;
}

const Home = () => {
    const [routineList, setRoutineList] = useState([]);
    const [routineCategory, setRoutineCategory] = useState('all');

    const handleChangeCategory = (categoryData: any) => {
        setRoutineCategory(categoryData);
    };

    const getRoutineData = async (endpoint: string) => {
        const getRoutine = async () => {
            const response = await tokenInstance.get(`/exercise/${endpoint}`);

            const { result } = response.data;

            setRoutineList(result);
        };

        getRoutine();
    };

    useEffect(() => {
        const getExerciseList = async () => {
            try {
                const response = await tokenInstance.get('/exercise/all');
                const { result } = response.data;

                setRoutineList(result);
            } catch (error) {
                console.log(error);
            }
        };
        getExerciseList();
    }, []);

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
        <>
            <H.LogoBox>
                <Image src={OurfitLogo} width={100} height={20} alt="로고" />
            </H.LogoBox>
            <H.SelectBox>
                <SmallSelect placeholder={'운동종목'} options={SelectOptions} handleChangeCategory={handleChangeCategory} />
            </H.SelectBox>
            <H.RoutineListBox>
                {routineList.map(({ id, imgpath, period, fewTime, routineName, category }) => (
                    <RoutineCard key={id} imgpath={imgpath} period={period} fewTime={fewTime} routineName={routineName} category={category} />
                ))}
            </H.RoutineListBox>
            <BottomBar />
        </>
    );
};

export default Home;
