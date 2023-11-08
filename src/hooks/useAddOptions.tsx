import { useEffect, useState } from 'react';

type OptionPropertyType = {
    value: string;
    label: string;
};

const useAddOptions = (periodToNumber: number) => {
    const [selectWeekOptions, setSelectWeekOptions] = useState<Array<OptionPropertyType>>([]);

    useEffect(() => {
        const periodArray = Array.from({ length: periodToNumber }, (_, index) => index + 1);
        const result: string[] = [];

        for (const element of periodArray) {
            result.push(String(element));
        }

        for (const element of result) {
            setSelectWeekOptions((prev: Array<OptionPropertyType>) => {
                return [...prev, { value: element, label: element }];
            });
        }
    }, []);

    return { selectWeekOptions };
};

export default useAddOptions;
