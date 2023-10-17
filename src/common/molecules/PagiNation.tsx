import styled from 'styled-components';

import { DAYS } from '@/data/Days';
import { StyledProps } from './type';

interface PagiNationProps {
    today: string;
    handleDay: (clikedDay: string) => void;
}

const PagiNation = ({ today, handleDay }: PagiNationProps) => {
    return (
        <PagiNationBox>
            {DAYS.map(element => (
                <DayBtn onClick={() => handleDay(element)} key={element} $today={today === element}>
                    <Day>{element}</Day>
                </DayBtn>
            ))}
        </PagiNationBox>
    );
};

const PagiNationBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DayBtn = styled.button<StyledProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.5%;
    height: 3rem;
    font-size: 0.875rem;
    border-radius: 50%;
    background-color: ${({ $today }) => $today && '#3179ee'};
`;
const Day = styled.span`
    color: #000;
`;

export default PagiNation;
