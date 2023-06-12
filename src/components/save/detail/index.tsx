import { useEffect, useState } from 'react';
import { SaveRoutineDetail, RoutineSuccess } from '@/apis/auth';
import { useAppSelector } from '@/store/hook';
import { BB } from '../style';
import { ExercisesType, RoutineType } from '../type';
import CreateButton from '@/common/molecules/CreateButton';
import Pagination from './Pagination';
import RestIcon from '../../../../public/assets/rest-icon.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

const SaveDetail = () => {
    const { register, reset, handleSubmit } = useForm<boolean[]>();

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayDate = new Date();
    const [currentWeek, setCurrentWeek] = useState<string>(week[todayDate.getDay()]);

    const selector = useAppSelector(state => state.routine);
    const [routine, setRoutine] = useState<RoutineType>();
    const [exercise, setExercise] = useState<ExercisesType[]>();

    useEffect(() => {
        reset();
        const todayRoutine = routine?.days.filter(el => el.day === currentWeek)[0];
        setExercise(todayRoutine?.exercises);
    }, [currentWeek]);

    useEffect(() => {
        handleData();
    }, []);

    const handleData = async () => {
        try {
            const result = await SaveRoutineDetail(selector.routineId, selector.week);
            setRoutine(result.data.result[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSuccess = async (data: boolean[]) => {
        const dataArr = Object.values(data);
        const successRate = Math.round((dataArr.filter(el => el === true).length / dataArr.length) * 100);

        try {
            const result = await RoutineSuccess(selector.routineId, successRate);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BB.Container>
            <BB.TopBox>
                <BB.TopWrapper>
                    <BB.Title>{selector.routineName}</BB.Title>
                    <BB.TagWrapper>
                        <BB.Tag>#{selector.category}</BB.Tag>
                        <BB.Tag>#{selector.fewTime}/week</BB.Tag>
                        <BB.Tag>#{selector.period} weeks</BB.Tag>
                    </BB.TagWrapper>
                </BB.TopWrapper>
            </BB.TopBox>
            <BB.BottomBox>
                <BB.WeekWrapper>
                    <Pagination currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
                </BB.WeekWrapper>
                <form onSubmit={handleSubmit(handleSuccess)}>
                    <BB.MainBox>
                        <BB.MainWrapper>
                            {exercise?.map((data, key) => (
                                <BB.ListWrapper key={key}>
                                    <BB.ExerciseTitle>
                                        {key + 1}.&nbsp;{data.name}
                                    </BB.ExerciseTitle>
                                    <BB.Table>
                                        <thead>
                                            <tr>
                                                <th>Set</th>
                                                <th>Weight</th>
                                                <th>Reps</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {data.sets.map(element => (
                                            <tbody key={element.id}>
                                                <tr>
                                                    <th>{element.sequence}</th>
                                                    <th>{element.weight}</th>
                                                    <th>{element.reps}</th>
                                                    <th>
                                                        <input type="checkbox" {...register(`${element.id}`)} />
                                                    </th>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </BB.Table>
                                </BB.ListWrapper>
                            ))}
                            {exercise === undefined ? (
                                <BB.WarningWrapper>
                                    <Image src={RestIcon} alt="rest-icon" width={100} height={100} />
                                    <BB.WarningMessage>오늘 운동 루틴은 없는 날입니다!</BB.WarningMessage>
                                </BB.WarningWrapper>
                            ) : (
                                ''
                            )}
                        </BB.MainWrapper>
                    </BB.MainBox>
                    <BB.ButtonWrapper>
                        <CreateButton message="운동 완료" />
                    </BB.ButtonWrapper>
                </form>
            </BB.BottomBox>
        </BB.Container>
    );
};

export default SaveDetail;
