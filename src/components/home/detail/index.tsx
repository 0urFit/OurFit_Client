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

import { OverviewInformationType, DetailRoutineType, resultType } from '../type';

const HomeDetail = () => {
    const [overviewInformation, setOverviewInformation] = useState<OverviewInformationType>({ programLength: 0, dayPerWeek: 0 });
    const [routineSlideList, setRoutineSlideList] = useState([]);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const { routineId } = router.query;
    const assuredId = routineId as string;
    const convertedId = parseInt(assuredId, 10);

    const { selectWeekOptions, setOptionArray } = useAddOptions();
    const { week } = useAppSelector(state => state.period);

    const handleSaveRoutine = async () => {
        try {
            const response = await SaveRoutineInfo(convertedId);

            return response.data;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    const saveRoutineInformation = (response: DetailRoutineType) => {
        const { result } = response.data;
        const [routine_information]: resultType = result;
        const { period, days } = routine_information;

        const dayPerWeek = days.length;

        setOverviewInformation(() => {
            return { programLength: period, dayPerWeek };
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

    useEffect(() => {
        const { period } = router.query;
        const assure_query = period as string;
        const conveted_period = parseInt(assure_query);

        setOptionArray(conveted_period);
    }, []);

    useEffect(() => {
        const getRoutineDetailInfo = async () => {
            try {
                const response = await GetDetailRoutine(convertedId, week);

                saveRoutineInformation(response);
                saveRoutineSlideList(response);
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        };

        getRoutineDetailInfo();
    }, [week]);

    return (
        <>
            <HD.RoutineTitleBox>
                <HD.RoutineTitle>nSuns</HD.RoutineTitle>
            </HD.RoutineTitleBox>
            <HD.RoutineDescBox>
                <HD.WeekSelectBox>
                    <SmallSelect placeholder="week" options={selectWeekOptions} handleChangeCategory={handleWeek} />
                </HD.WeekSelectBox>
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
                <HD.FooterBox>
                    <LikeControl routineId={convertedId} />
                    <CreateButton handleSubmit={handleSaveRoutine} message="등록하기" />
                </HD.FooterBox>
            </HD.RoutineDescBox>
        </>
    );
};

export default HomeDetail;
