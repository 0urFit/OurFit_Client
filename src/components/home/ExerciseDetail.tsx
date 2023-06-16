import { HD } from './style';

interface ExerciseDetailPropsType {
    title: string;
    sets: [];
}

const ExerciseDetail = ({ title, sets }: ExerciseDetailPropsType) => {
    return (
        <HD.ExerciseCardItem>
            <HD.ExerciseTitle>{title}</HD.ExerciseTitle>
            <HD.ExerciseTable>
                <HD.ExerciseThead>
                    <HD.ExerciseTr>
                        <HD.ExerciseTh>Set</HD.ExerciseTh>
                        <HD.ExerciseTh>Weight</HD.ExerciseTh>
                        <HD.ExerciseTh>Reps</HD.ExerciseTh>
                    </HD.ExerciseTr>
                </HD.ExerciseThead>
                <HD.ExerciseDetailTbody>
                    {sets.map(({ sequence, weight, reps }, index) => (
                        <HD.ExerciseTr key={index}>
                            <HD.ExerciseDetailTd>{sequence}</HD.ExerciseDetailTd>
                            <HD.ExerciseDetailTd>{weight === 0 ? '-' : weight}</HD.ExerciseDetailTd>
                            <HD.ExerciseDetailTd>{reps}</HD.ExerciseDetailTd>
                        </HD.ExerciseTr>
                    ))}
                </HD.ExerciseDetailTbody>
            </HD.ExerciseTable>
        </HD.ExerciseCardItem>
    );
};

export default ExerciseDetail;
