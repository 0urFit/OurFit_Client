import styled from 'styled-components';

import { RoutineItemType } from '../type';

interface TableBodyProps {
    sets: RoutineItemType[];
}

const TableBody = ({ sets }: TableBodyProps) => {
    return (
        <>
            {sets.map(({ sequence, weight, reps }) => (
                <Tbody key={sequence}>
                    <Tr>
                        <Td>{sequence}</Td>
                        <Td>{weight === 0 ? '-' : weight}</Td>
                        <Td>{reps}</Td>
                    </Tr>
                </Tbody>
            ))}
        </>
    );
};

const Tbody = styled.tbody`
    text-align: center;
`;
const Tr = styled.tr``;
const Td = styled.td`
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.5;
    color: #828282;
`;

export default TableBody;
