import { useState } from 'react';

import ExerciseDetail from './ExerciseDetail';
import CreateButton from '@/common/molecules/CreateButton';
import PagiNation from '@/common/molecules/PagiNation';

import { RoutineSuccess } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import { convertToNumber } from '@/utils/convertToNumber';

import { BB } from '../style';

interface ExerciseDetailMain {
    routineId: string;
    weekProgress: string;
}

const ExerciseDetailMain = ({ routineId, weekProgress }: ExerciseDetailMain) => {
    const [today, setToday] = useState('Mon');

    const handleDay = (clickedDay: string) => {
        setToday(clickedDay);
    };

    const handleCompleteWorkout = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const covertedData = convertToNumber(routineId, weekProgress);

        try {
            const response = await RoutineSuccess(covertedData.id, covertedData.week, today);

            return response;
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    };

    return (
        <BB.MainContainer>
            <BB.MainBox>
                <PagiNation today={today} handleDay={handleDay} />
                <BB.Form onSubmit={handleCompleteWorkout}>
                    <BB.FormContents>
                        <ExerciseDetail today={today} routineId={routineId} weekProgress={weekProgress} />
                    </BB.FormContents>
                    <BB.SubmitBtnWrapper>
                        <CreateButton message="운동완료" />
                    </BB.SubmitBtnWrapper>
                </BB.Form>
            </BB.MainBox>
        </BB.MainContainer>
    );
};

export default ExerciseDetailMain;

// 월요일 입장
// isSuccess의 값
// 버튼 색 결정
