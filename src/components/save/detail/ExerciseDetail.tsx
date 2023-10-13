import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import TableBody from './TableBody';
import NoExerciseDay from '@/common/molecules/NoExerciseDay';

import { SaveRoutineDetail } from '@/apis/auth';
import { convertToNumber } from '@/utils/convertToNumber';
import { convertToMapObject } from '@/utils/convertToMapObject';
import getErrorMessage from '@/utils/getErrorMessage';

interface ExerciseDetailProps {
    today: string;
    routineId: string;
    handleExerciseComplete: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ExerciseDetail = ({ today, routineId, handleExerciseComplete }: ExerciseDetailProps) => {
    const [exerciseDetail, setExerciseDetail] = useState<Map<string, []>>();

    const convertedData = convertToNumber(routineId);

    useEffect(() => {
        const fetchSaveRoutine = async (id: number) => {
            try {
                const response = await SaveRoutineDetail(id);
                const { result } = response.data;

                setExerciseDetail(convertToMapObject(result.days));
            } catch (error) {
                throw new Error(getErrorMessage(error));
            }
        };

        fetchSaveRoutine(convertedData.id);
    }, [handleExerciseComplete]);

    return (
        <Box>
            {!exerciseDetail?.get(today) ? (
                <NoExerciseDay />
            ) : (
                exerciseDetail?.get(today)?.map(({ name, sets }) => (
                    <RoutineBox key={name}>
                        <Table>
                            <Title>{name}</Title>
                            <Thead>
                                <Tr>
                                    <Th>Set</Th>
                                    <Th>Weight</Th>
                                    <Th>Reps</Th>
                                </Tr>
                            </Thead>
                            <TableBody sets={sets} />
                        </Table>
                    </RoutineBox>
                ))
            )}
        </Box>
    );
};

const Box = styled.div``;
const RoutineBox = styled.div``;
const Title = styled.caption`
    text-align: left;
    margin-bottom: 0.625rem;
    font-weight: bold;
`;
const Table = styled.table`
    width: 100%;
    margin-bottom: 0.625rem;
`;
const Thead = styled.thead`
    line-height: 1.5;
`;
const Tr = styled.tr``;
const Th = styled.th``;

export default ExerciseDetail;
