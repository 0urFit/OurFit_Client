import { days } from '@/data/Days';
import styled from 'styled-components';

interface Props {
    handleDay: (clikedDay: string) => void;
}

const PagiNation = ({ handleDay }: Props) => {
    return (
        <PagiNationBox>
            {days.map(element => (
                <DayBtn onClick={() => handleDay(element)} key={element}>
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
const DayBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.125rem;
    height: 3.125rem;
    font-size: 0.875rem;
    border-radius: 50%;
    background-color: #fff;
`;
const Day = styled.span``;

export default PagiNation;
