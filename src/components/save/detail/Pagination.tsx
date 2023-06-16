import { Dispatch, SetStateAction } from 'react';
import { WeekOptions } from '@/data/SaveData';
import { PN } from '../style';

interface propsType {
    currentDay: string;
    setCurrentWeek: Dispatch<SetStateAction<string>>;
}

const Pagination = ({ currentDay, setCurrentWeek }: propsType) => {
    const handleWeek = (week: string) => {
        setCurrentWeek(week);
    };
    return (
        <>
            {WeekOptions.map(el => (
                <PN.WeekButtonWrapper key={el.value} onClick={() => handleWeek(el.value)}>
                    <PN.WeekButton currentDay={currentDay === el.value}>{el.label}</PN.WeekButton>
                </PN.WeekButtonWrapper>
            ))}
        </>
    );
};

export default Pagination;
