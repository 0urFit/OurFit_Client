import { useState } from 'react';

type OptionPropertyType = {
    value: string;
    label: string;
};

const useAddOptions = () => {
    const [selectWeekOptions, setSelectWeekOptions] = useState<Array<OptionPropertyType>>([]);

    const setOptionArray = (period: number) => {
        const periodArray = Array.from({ length: period }, (_, index) => index + 1);
        const result: string[] = [];

        for (const element of periodArray) {
            result.push(String(element));
        }

        for (const element of result) {
            setSelectWeekOptions((prev: Array<OptionPropertyType>) => {
                return [...prev, { value: element, label: element }];
            });
        }
    };

    return { selectWeekOptions, setOptionArray };
};

export default useAddOptions;
