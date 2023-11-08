import { useRouter } from 'next/router';

import { useQuery } from '@tanstack/react-query';

import SmallSelect from '@/common/molecules/SmallSelect';
import CreateButton from '@/common/molecules/CreateButton';
import LikeControl from '@/common/molecules/LikeControl';
import RoutineDetail from '../RoutineDetail';

import { GetDetailRoutine, GetRoutineOverview } from '@/apis/apiService';
import useAddOptions from '@/hooks/useAddOptions';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { setWeek } from '@/store/slices/periodSlice';
import { convertToNumber } from '@/utils/convertToNumber';

import { HD } from '../style';

import { InferGetServerSidePropsType } from 'next/types';
import { getServerSideProps } from '@/pages/home/detail/[slug]';

const HomeDetail = ({ props: { converted_routine_id } }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { period } = router.query;
    const assure_query = period as string;
    const periodToNumber = convertToNumber(assure_query);

    const { selectWeekOptions } = useAddOptions(periodToNumber.id);
    const { week } = useAppSelector(state => state.period);

    const handleWeek = (selectedWeek: number) => {
        dispatch(setWeek(selectedWeek));
    };

    const { data: routinDetailInformation } = useQuery({
        queryKey: ['routine-detail', week],
        queryFn: () => GetDetailRoutine(converted_routine_id, week),
    });

    const { data: routineOverviewInformation } = useQuery({
        queryKey: ['routine-overview', converted_routine_id],
        queryFn: () => GetRoutineOverview(converted_routine_id),
        gcTime: 0,
    });

    return (
        <HD.Box>
            <HD.RoutineTitleBox>
                <HD.RoutineTitle>{routineOverviewInformation?.routineName}</HD.RoutineTitle>
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
                                    <HD.Content>{routineOverviewInformation?.weeks} days</HD.Content>
                                </HD.Tr>
                                <HD.Tr>
                                    <HD.ContentTitle>Program Length</HD.ContentTitle>
                                    <HD.Content>{routineOverviewInformation?.period} weeks</HD.Content>
                                </HD.Tr>
                            </HD.Tbody>
                        </HD.OverviewDataTable>
                    </HD.OverviewBox>
                    <HD.RoutineSlideBox>
                        {routinDetailInformation && routinDetailInformation.map(({ day, exercises }) => <RoutineDetail key={day} day={day} exercises={exercises} />)}
                    </HD.RoutineSlideBox>
                </HD.RoutineMain>
                <HD.FooterBox>
                    <LikeControl id={converted_routine_id} liked={routineOverviewInformation?.isliked} />
                    <CreateButton routindId={converted_routine_id} message="등록하기" isEnrolled={routineOverviewInformation?.isenrolled} />
                </HD.FooterBox>
            </HD.RoutineDescBox>
        </HD.Box>
    );
};

export default HomeDetail;
