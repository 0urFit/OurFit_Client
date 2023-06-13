import { useState } from 'react';

type OptionPropertyType = {
    value: number;
    label: number;
};

const useAddOptions = () => {
    const [selectWeekOptions, setSelectWeekOptions] = useState<Array<OptionPropertyType>>([]);

    const setOptionArray = (period: number) => {
        const periodArray = Array.from({ length: period }, (_, index) => index + 1);

        for (const element of periodArray) {
            setSelectWeekOptions((prev: Array<OptionPropertyType>) => {
                return [...prev, { value: element, label: element }];
            });
        }
    };

    return { selectWeekOptions, setOptionArray };
};

export default useAddOptions;
