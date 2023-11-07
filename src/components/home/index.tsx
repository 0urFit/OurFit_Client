import React, { useState } from 'react';

import SmallSelect from '@/common/molecules/SmallSelect';
import RoutineCard from '@/common/molecules/RoutineCard';

import { GetRoutine } from '@/apis/apiService';
import { SelectOptions } from '@/data/SaveData';

import { H } from './style';
import { useQuery } from '@tanstack/react-query';
import Loading from '@/common/molecules/Loading';

const Home = () => {
    const [routineCategory, setRoutineCategory] = useState('all');

    const handleChangeCategory = (categoryData: string) => {
        setRoutineCategory(categoryData);
    };

    const { data: routineList, isPending } = useQuery({
        queryKey: ['get-routine', routineCategory],
        queryFn: () => GetRoutine(routineCategory),
    });

    return (
        <H.Box>
            <H.SelectBox>
                <SmallSelect placeholder={'운동종목'} options={SelectOptions} handleChangeCategory={handleChangeCategory} />
            </H.SelectBox>
            <H.RoutineListBox>
                {isPending ? (
                    <Loading />
                ) : (
                    <>
                        {routineList &&
                            routineList.map(({ id, imgpath, period, liked, enrolled, fewTime, routineName, category }) => (
                                <RoutineCard key={id} id={id} imgpath={imgpath} period={period} enrolled={enrolled} fewTime={fewTime} routineName={routineName} category={category} liked={liked} />
                            ))}
                    </>
                )}
            </H.RoutineListBox>
        </H.Box>
    );
};

export default Home;
