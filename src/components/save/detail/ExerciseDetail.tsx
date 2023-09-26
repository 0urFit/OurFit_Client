import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
    today: string;
    saveRoutineDetail?: [
        {
            day: string;
            exercises: [];
        },
    ];
}

const ExerciseDetail = ({ today, saveRoutineDetail }: Props) => {
    const [exerciseDetail, setExerciseDetail] = useState<Map<string, object>>();

    useEffect(() => {
        const mapObj = new Map();
        // 첫 렌더링 때만 값이 들어오고 그 후에는 saveRoutineDetail에 빈 배열이 들어온다.
        for (const item of saveRoutineDetail ?? []) {
            mapObj.set(item.day, item.exercises);
        }

        setExerciseDetail(mapObj);
    }, []);

    return (
        <RoutineBox>
            <Title>1. Bench Press</Title>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Set</Th>
                        <Th>Weight</Th>
                        <Th>Reps</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>100kg</Td>
                        <Td>10</Td>
                    </Tr>
                </Tbody>
            </Table>
        </RoutineBox>
    );
};

const RoutineBox = styled.div``;
const Title = styled.p`
    text-align: left;
    margin-bottom: 0.625rem;
`;
const Table = styled.table`
    width: 100%;
`;
const Thead = styled.thead`
    line-height: 1.5;
`;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th``;
const Td = styled.td`
    font-size: 14px;
    font-weight: bold;
    color: #828282;
`;
const CheckBox = styled.input``;

export default ExerciseDetail;
