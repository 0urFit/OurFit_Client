import ExerciseDetail from './ExerciseDetail';
import { HD } from './style';

interface RoutineDetailPropsType {
    day: string;
    exercises: [];
}

const RoutineDetail = ({ day, exercises }: RoutineDetailPropsType) => {
    return (
        <HD.RoutineDetailBox>
            <HD.Day>{day}</HD.Day>
            <HD.ExerciseDetailBox>
                {exercises.map(({ name, sets }) => (
                    <ExerciseDetail key={name} title={name} sets={sets} />
                ))}
            </HD.ExerciseDetailBox>
        </HD.RoutineDetailBox>
    );
};

export default RoutineDetail;
