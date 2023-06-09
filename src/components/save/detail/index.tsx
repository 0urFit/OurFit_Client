import { WeekOptions } from '@/data/SaveData';
import { BB } from '../style';
import CreateButton from '@/common/molecules/CreateButton';

const SaveDetail = () => {
    return (
        <BB.Container>
            <BB.TopBox>
                <BB.TopWrapper>
                    <BB.Title>nSuns</BB.Title>
                    <ul>
                        <BB.Tag>#diet</BB.Tag>
                        <BB.Tag>#female</BB.Tag>
                        <BB.Tag>#4weeks</BB.Tag>
                    </ul>
                </BB.TopWrapper>
            </BB.TopBox>
            <BB.BottomBox>
                <BB.WeekWrapper>
                    {WeekOptions.map(el => (
                        <BB.WeekButtonWrapper key={el.value}>
                            <BB.WeekButton>{el.label}</BB.WeekButton>
                        </BB.WeekButtonWrapper>
                    ))}
                </BB.WeekWrapper>
                <BB.MainWrapper>
                    <BB.ListWrapper>
                        <BB.ExerciseTitle>Bench Press</BB.ExerciseTitle>
                        <BB.Table>
                            <thead>
                                <tr>
                                    <th>Set</th>
                                    <th>Weight</th>
                                    <th>Reps</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>100kg</th>
                                    <th>10</th>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <th>100kg</th>
                                    <th>10</th>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <th>100kg</th>
                                    <th>10</th>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                </tr>
                            </tbody>
                        </BB.Table>
                    </BB.ListWrapper>
                </BB.MainWrapper>
                <BB.ButtonWrapper>
                    <CreateButton message="운동 완료" />
                </BB.ButtonWrapper>
            </BB.BottomBox>
        </BB.Container>
    );
};

export default SaveDetail;
