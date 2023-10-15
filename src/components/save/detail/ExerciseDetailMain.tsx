import { useEffect, useState } from 'react';

import ExerciseDetail from './ExerciseDetail';
import CreateButton from '@/common/molecules/CreateButton';
import PagiNation from '@/common/molecules/PagiNation';
import RoutineCompleteModal from '@/common/molecules/RoutineCompleteModal';
import BackDrop from '@/common/molecules/BackDrop';

import { RoutineSuccess } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import { convertToNumber } from '@/utils/convertToNumber';

import { BB } from '../style';
import { useRouter } from 'next/router';
import { ModalType } from '../type';
import { createPortal } from 'react-dom';
interface ExerciseDetailMain {
    routineId: string;
    weekProgress: string;
}

const ExerciseDetailMain = ({ routineId, weekProgress }: ExerciseDetailMain) => {
    const [today, setToday] = useState('Mon');
    const [portalElement, setPortalElement] = useState<ModalType>(null);
    const [backDropElement, setBackDropElement] = useState<ModalType>(null);
    const [isModal, setIsModal] = useState(false);

    const router = useRouter();

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

        const covertedData = convertToNumber(routineId, weekProgress);

        try {
            const response = await RoutineSuccess(covertedData.id, covertedData.week, today);
            const { code } = response.data;

            code === 'EX100' && moveMypage();
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    };

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
                    <BB.SubmitBtnWrapper>
                        <CreateButton message="운동완료" />
                    </BB.SubmitBtnWrapper>
                </BB.Form>
            </BB.MainContainer>
            {portalElement && isModal ? createPortal(<RoutineCompleteModal />, portalElement) : null}
            {backDropElement && isModal ? createPortal(<BackDrop />, backDropElement) : null}
        </>
    );
};

export default ExerciseDetailMain;
