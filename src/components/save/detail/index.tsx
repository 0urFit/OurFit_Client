import { useEffect, useState } from 'react';

import PagiNation from '@/common/molecules/PagiNation';
import CreateButton from '@/common/molecules/CreateButton';
import ExerciseDetail from './ExerciseDetail';

import { SaveRoutineDetail } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import { getServerSideProps } from '@/pages/save/detail/[slug]';

import { InferGetServerSidePropsType } from 'next/types';

import { BB } from '../style';

type SaveRoutineInfo = {
    category?: string;
    fewTime?: number;
    period?: number;
    days?: [
        {
            day: string;
            exercises: [];
        },
    ];
};

const SaveDetail = ({ props: { data } }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [saveRoutineDetail, setSaveRoutineDetail] = useState<SaveRoutineInfo>({});
    const [today, setToday] = useState('Mon');

    const handleDay = (clickedDay: string) => {
        setToday(clickedDay);
    };

    useEffect(() => {
        const { routineId, weekProgress } = data;

        const assure_routineId = routineId;
        const conveted_routineId = parseInt(assure_routineId);

        const assure_weekProgress = weekProgress;
        const conveted_weekProgress = parseInt(assure_weekProgress);

        const fetchSaveData = async (id: number, week: number) => {
            try {
                const response = await SaveRoutineDetail(id, week);
                const { result } = response.data;

                setSaveRoutineDetail(result);

                return response.data;
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        };

        fetchSaveData(conveted_routineId, conveted_weekProgress);
    }, []);

    return (
        <BB.Container>
            <BB.TopBox>
                <BB.TopWrapper>
                    <BB.Title>routineName</BB.Title>
                    <BB.TagWrapper>
                        <BB.Tag>#{saveRoutineDetail.category}</BB.Tag>
                        <BB.Tag>#{saveRoutineDetail.fewTime}/week</BB.Tag>
                        <BB.Tag>#{saveRoutineDetail.period}weeks</BB.Tag>
                    </BB.TagWrapper>
                </BB.TopWrapper>
            </BB.TopBox>
            <BB.MainContainer>
                <BB.MainBox>
                    <PagiNation handleDay={handleDay} />
                    <BB.Form>
                        <BB.FormContents>
                            <ExerciseDetail today={today} saveRoutineDetail={saveRoutineDetail.days} />
                        </BB.FormContents>
                        <BB.SubmitBtnWrapper>
                            <CreateButton message="운동완료" />
                        </BB.SubmitBtnWrapper>
                    </BB.Form>
                </BB.MainBox>
            </BB.MainContainer>
        </BB.Container>
    );
};

export default SaveDetail;
