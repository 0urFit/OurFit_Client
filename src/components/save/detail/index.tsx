import { useEffect, useState } from 'react';
import { SaveRoutineDetail, RoutineSuccess } from '@/apis/auth';
import { BB } from '../style';
import { RoutineType, TodayExercisesType } from '../type';
import CreateButton from '@/common/molecules/CreateButton';
import Pagination from './Pagination';
import RestIcon from '../../../../public/assets/rest-icon.svg';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const SaveDetail = () => {
    const router = useRouter();
    const { routineId, weekProgress } = router.query;
    const usedId = routineId as unknown as number;
    const usedWeek = weekProgress as unknown as number;

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const todayDate = new Date();
    const [currentDay, setCurrentWeek] = useState<string>(week[todayDate.getDay()]);

    const { register, reset, handleSubmit } = useForm<boolean[]>();

    const [routine, setRoutine] = useState<RoutineType>();
    const [exercise, setExercise] = useState<TodayExercisesType>();
    const [isLastDay, setIsLastDay] = useState<boolean>(false);

    useEffect(() => {
        reset();
        setIsLastDay(routine?.days[routine.days.length - 1].day === currentDay);
        const todayRoutine = routine?.days.filter(el => el.day === currentDay)[0];
        setExercise(todayRoutine);
    }, [routine, currentDay]);

    useEffect(() => {
        handleData();
    }, [usedId]);

    const handleData = async () => {
        try {
            const result = await SaveRoutineDetail(usedId, usedWeek);
            setRoutine(result.data.result[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSuccess = async (data: boolean[]) => {
        const dataArr = Object.values(data);
        const successRate = ((dataArr.filter(el => el === true).length / dataArr.length) * 100).toFixed(1) as unknown as number;

        try {
            const result = await RoutineSuccess(usedId, usedWeek, currentDay, successRate, isLastDay);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BB.Container>
            <BB.TopBox>
                <BB.TopWrapper>
                    <BB.Title>{routine?.routineName}</BB.Title>
                    <BB.TagWrapper>
                        <BB.Tag>#{routine?.category}</BB.Tag>
                        <BB.Tag>#{routine?.fewTime}/week</BB.Tag>
                        <BB.Tag>#{routine?.period} weeks</BB.Tag>
                    </BB.TagWrapper>
                </BB.TopWrapper>
            </BB.TopBox>
            <BB.BottomBox>
                <BB.WeekWrapper>
                    <Pagination currentDay={currentDay} setCurrentWeek={setCurrentWeek} />
                </BB.WeekWrapper>
                <form onSubmit={handleSubmit(handleSuccess)}>
                    <BB.MainBox>
                        <BB.MainWrapper>
                            {exercise ? (
                                exercise?.exercises.map((data, key) => (
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
                                ))
                            ) : (
                                <BB.WarningWrapper>
                                    <Image src={RestIcon} alt="rest-icon" width={100} height={100} />
                                    <BB.WarningMessage>오늘 운동 루틴은 없는 날입니다!</BB.WarningMessage>
                                </BB.WarningWrapper>
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
