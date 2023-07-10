import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SmallSelect from '@/common/molecules/SmallSelect';
import CreateButton from '@/common/molecules/CreateButton';
import LikeControl from '@/common/molecules/LikeControl';
import RoutineDetail from '../RoutineDetail';

import { GetDetailRoutine, SaveRoutineInfo } from '@/apis/auth';
import useAddOptions from '@/hooks/useAddOptions';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import getErrorMessage from '@/utils/getErrorMessage';
import { setWeek } from '@/store/slices/periodSlice';

import { HD } from '../style';

import { DetailRoutineType, resultType } from '../type';
import { InferGetServerSidePropsType } from 'next/types';
import { getServerSideProps } from '@/pages/home/detail/[slug]';

const HomeDetail = ({ props: { converted_routine_id, converted_routine_liked } }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [overviewInformation, setOverviewInformation] = useState({ routineName: '', programLength: 0, dayPerWeek: 0 });
    const [routineSlideList, setRoutineSlideList] = useState([]);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const { selectWeekOptions, setOptionArray } = useAddOptions();
    const { week } = useAppSelector(state => state.period);

    const handleSaveRoutine = async () => {
        try {
            const response = await SaveRoutineInfo(converted_routine_id);

            return response.data;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    const saveRoutineInformation = (response: DetailRoutineType) => {
        const { result } = response.data;
        const [routine_information]: resultType = result;
        const { routineName, period, days } = routine_information;

        const dayPerWeek = days.length;

        setOverviewInformation(() => {
            return { routineName, programLength: period, dayPerWeek };
        });
    };

    const saveRoutineSlideList = (response: DetailRoutineType) => {
        const { result } = response.data;
        const [routine_information]: resultType = result;
        const { days } = routine_information;

        setRoutineSlideList(days);
    };

    const handleWeek = (selectedWeek: number) => {
        dispatch(setWeek(selectedWeek));
    };

    const getRoutineDetailInfo = async () => {
        try {
            const response = await GetDetailRoutine(converted_routine_id, week);

            saveRoutineInformation(response);
            saveRoutineSlideList(response);
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        const { period } = router.query;
        const assure_query = period as string;
        const conveted_period = parseInt(assure_query);

        setOptionArray(conveted_period);
    }, []);

    useEffect(() => {
        getRoutineDetailInfo();
    }, [week]);

    return (
        <HD.Box>
            <HD.RoutineTitleBox>
                <HD.RoutineTitle>{overviewInformation.routineName}</HD.RoutineTitle>
            </HD.RoutineTitleBox>
            <HD.RoutineDescBox>
                <HD.WeekSelectBox>
                    <SmallSelect placeholder="week" options={selectWeekOptions} handleChangeCategory={handleWeek} />
                </HD.WeekSelectBox>
                <HD.RoutineMain>
                    <HD.OverviewBox>
                        <HD.OverviewDataTable>
                            <HD.Thead>
                                <HD.Tr>
                                    <HD.Th>Program Overview</HD.Th>
                                </HD.Tr>
                                <HD.Tr>
                                    <HD.JustSpacing />
                                </HD.Tr>
                            </HD.Thead>
                            <HD.Tbody>
                                <HD.Tr>
                                    <HD.ContentTitle>Level</HD.ContentTitle>
                                    <HD.Content>상급</HD.Content>
                                </HD.Tr>
                                <HD.Tr>
                                    <HD.ContentTitle>Day Per Week</HD.ContentTitle>
                                    <HD.Content>{overviewInformation.dayPerWeek} days</HD.Content>
                                </HD.Tr>
                                <HD.Tr>
                                    <HD.ContentTitle>Program Length</HD.ContentTitle>
                                    <HD.Content>{overviewInformation.programLength} weeks</HD.Content>
                                </HD.Tr>
                            </HD.Tbody>
                        </HD.OverviewDataTable>
                    </HD.OverviewBox>
                    <HD.RoutineSlideBox>
                        {routineSlideList.map(({ day, exercises }) => (
                            <RoutineDetail key={day} day={day} exercises={exercises} />
                        ))}
                    </HD.RoutineSlideBox>
                </HD.RoutineMain>
                <HD.FooterBox>
                    <LikeControl id={converted_routine_id} liked={converted_routine_liked} />
                    <CreateButton handleSubmit={handleSaveRoutine} message="등록하기" />
                </HD.FooterBox>
            </HD.RoutineDescBox>
        </HD.Box>
    );
};

export default HomeDetail;
