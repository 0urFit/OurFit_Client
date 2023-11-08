import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';

import ExerciseDetail from './ExerciseDetail';
import PagiNation from '@/common/molecules/PagiNation';
import RoutineCompleteModal from '@/common/molecules/RoutineCompleteModal';
import BackDrop from '@/common/molecules/BackDrop';

import { RoutineSuccess, SaveRoutineDetail } from '@/apis/apiService';
import getErrorMessage from '@/utils/getErrorMessage';
import { convertToNumber } from '@/utils/convertToNumber';
import { filteringMapObject } from '@/utils/filteringMapObject';
import useModal from '@/hooks/useModal';

import { BB } from '../style';
import { ROUTES } from '@/route/routes';
import RoutineCompleteButton from '@/common/molecules/RoutineCompleteButton';
interface ExerciseDetailMain {
    routineId: string;
}

const ExerciseDetailMain = ({ routineId }: ExerciseDetailMain) => {
    const [today, setToday] = useState('Mon');
    const [successByDay, setSuccessByDay] = useState<Map<string, boolean>>(new Map());
    const [week, setWeek] = useState(1);

    const { isModal, updateIsModal, portalElement, backDropElement } = useModal();

    const router = useRouter();

    const convertedRoutineId = convertToNumber(routineId);

    const handleDay = (clickedDay: string) => {
        setToday(clickedDay);
    };

    const moveMypage = () => {
        updateIsModal(true);

        setTimeout(() => {
            router.replace(ROUTES.MYPAGE);
        }, 2500);
    };

    const handleCompleteWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const covertedData = convertToNumber(routineId);

        try {
            const response = await RoutineSuccess(covertedData.id, week, today);
            const { code } = response.data;

            initializeDay();
            fetchSuccess();

            code === 'EX100' && moveMypage();
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    };

    const fetchSuccess = async () => {
        try {
            const response = await SaveRoutineDetail(convertedRoutineId.id);
            const { result } = response.data;

            setWeek(result.currentWeek);
            setSuccessByDay(filteringMapObject(result.days));
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    };

    const initializeDay = () => {
        const keysList = Array.from(successByDay.keys());
        const lastDay = keysList[keysList.length - 1];

        lastDay === today && setToday('Mon');
    };

    useEffect(() => {
        fetchSuccess();
    }, []);

    return (
        <>
            <BB.MainContainer>
                <PagiNation today={today} handleDay={handleDay} />
                <BB.Form onSubmit={handleCompleteWorkout}>
                    <BB.FormContents>
                        <ExerciseDetail handleExerciseComplete={handleCompleteWorkout} today={today} routineId={routineId} />
                    </BB.FormContents>
                    {successByDay.has(today) && (
                        <BB.SubmitBtnWrapper>
                            <RoutineCompleteButton message="운동완료" isSaved={successByDay.get(today)} />
                        </BB.SubmitBtnWrapper>
                    )}
                </BB.Form>
            </BB.MainContainer>
            {portalElement && isModal ? createPortal(<RoutineCompleteModal />, portalElement) : null}
            {backDropElement && isModal ? createPortal(<BackDrop />, backDropElement) : null}
        </>
    );
};

export default ExerciseDetailMain;
