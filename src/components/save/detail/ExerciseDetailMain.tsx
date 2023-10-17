import { useEffect, useState } from 'react';

import ExerciseDetail from './ExerciseDetail';
import CreateButton from '@/common/molecules/CreateButton';
import PagiNation from '@/common/molecules/PagiNation';
import RoutineCompleteModal from '@/common/molecules/RoutineCompleteModal';
import BackDrop from '@/common/molecules/BackDrop';

import { RoutineSuccess, SaveRoutineDetail } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import { convertToNumber } from '@/utils/convertToNumber';

import { BB } from '../style';
import { useRouter } from 'next/router';
import { ModalType } from '../type';
import { createPortal } from 'react-dom';
import { filteringMapObject } from '@/utils/filteringMapObject';
interface ExerciseDetailMain {
    routineId: string;
}

const ExerciseDetailMain = ({ routineId }: ExerciseDetailMain) => {
    const [today, setToday] = useState('Mon');
    const [portalElement, setPortalElement] = useState<ModalType>(null);
    const [backDropElement, setBackDropElement] = useState<ModalType>(null);
    const [isModal, setIsModal] = useState(false);
    const [successByDay, setSuccessByDay] = useState<Map<string, boolean>>(new Map());
    const [week, setWeek] = useState(1);

    const router = useRouter();

    const convertedRoutineId = convertToNumber(routineId);

    const handleDay = (clickedDay: string) => {
        setToday(clickedDay);
    };

    const moveMypage = () => {
        setIsModal(prev => !prev);

        setTimeout(() => {
            router.replace('/mypage');
        }, 2500);
    };

    const handleCompleteWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const covertedData = convertToNumber(routineId);

        try {
            const response = await RoutineSuccess(covertedData.id, week, today);
            const { code } = response.data;

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

    useEffect(() => {
        fetchSuccess();
    }, []);

    useEffect(() => {
        setPortalElement(document.getElementById('portal'));
        setBackDropElement(document.getElementById('back-drop'));
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
                            <CreateButton message="운동완료" isSaved={successByDay.get(today)} />
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
