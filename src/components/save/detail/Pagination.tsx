import { Dispatch, SetStateAction } from 'react';
import { WeekOptions } from '@/data/SaveData';
import { PN } from '../style';

interface propsType {
    currentWeek: string;
    setCurrentWeek: Dispatch<SetStateAction<string>>;
}

const Pagination = ({ currentWeek, setCurrentWeek }: propsType) => {
    const handleWeek = (week: string) => {
        setCurrentWeek(week);
    };
    return (
        <>
            {WeekOptions.map(el => (
                <PN.WeekButtonWrapper key={el.value} onClick={() => handleWeek(el.value)}>
                    <PN.WeekButton currentWeek={currentWeek === el.value}>{el.label}</PN.WeekButton>
                </PN.WeekButtonWrapper>
            ))}
        </>
    );
};

export default Pagination;
