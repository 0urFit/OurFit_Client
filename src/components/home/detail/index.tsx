import { useRouter } from 'next/router';

import SmallSelect from '@/common/molecules/SmallSelect';
import CreateButton from '@/common/molecules/CreateButton';
import LikeControl from '@/common/molecules/LikeControl';

import { GetDetailRoutine, SaveRoutineInfo } from '@/apis/auth';
import getErrorMessage from '@/utils/getErrorMessage';

import { HD } from '../style';
import { useEffect } from 'react';
import useAddOptions from '@/hooks/useAddOptions';

const HomeDetail = () => {
    const router = useRouter();
    const { selectWeekOptions, setOptionArray } = useAddOptions();

    const { routineId } = router.query;
    const assuredId = routineId as string;
    const convertedId = parseInt(assuredId, 10);

    const handleSaveRoutine = async () => {
        try {
            const response = await SaveRoutineInfo(convertedId);

            return response.data;
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        const getRoutineDetailInfo = async () => {
            try {
                const response = await GetDetailRoutine(convertedId, 1);
                const { result } = response.data;
                const { period } = result[0];

                setOptionArray(period);
            } catch (e) {
                throw new Error(getErrorMessage(e));
            }
        };

        getRoutineDetailInfo();
    }, []);

    return (
        <>
            <HD.RoutineTitleBox>
                <HD.RoutineTitle>nSuns</HD.RoutineTitle>
            </HD.RoutineTitleBox>
            <HD.RoutineDescBox>
                <HD.WeekSelectBox>
                    <SmallSelect placeholder="week" options={selectWeekOptions} />
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
                                <HD.Content>6days</HD.Content>
                            </HD.Tr>
                            <HD.Tr>
                                <HD.ContentTitle>Program Length</HD.ContentTitle>
                                <HD.Content>6weeks</HD.Content>
                            </HD.Tr>
                        </HD.Tbody>
                    </HD.OverviewDataTable>
                </HD.OverviewBox>
                <HD.RoutineSlideBox>
                    {slides.map(element => (
                        <HD.RoutineDetailBox key={element.key}>{element.test}</HD.RoutineDetailBox>
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
