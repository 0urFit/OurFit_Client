import Select, { CSSObjectWithLabel } from 'react-select';
import { Control, Controller } from 'react-hook-form';
import { SelectOptions } from '@/data/SignUpData';
import { useEffect, useId, useState } from 'react';
import { InputType, ItemType } from './type';

interface propsType {
    control: Control<InputType, boolean>;
    data: ItemType;
    defaultValue?: string;
}

const SelectBox = ({ control, data, defaultValue }: propsType) => {
    const selectStyle = {
        placeholder: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            color: '#27639d',
            fontWeight: '400',
            fontSize: '0.875rem',
        }),
        control: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            paddingLeft: '0.375rem',
            width: '18.375rem',
            height: '3.1875rem',
            borderColor: 'black',
            borderRadius: '0.625rem',
            boxShadow: 'none',
        }),
        dropdownIndicator: () => ({
            display: 'none',
        }),
        indicatorsContainer: () => ({
            display: 'none',
        }),
    };

    const [gender, setGender] = useState<string>();

    useEffect(() => {
        if (defaultValue === 'male') {
            setGender('남자');
        } else if (defaultValue === 'female') {
            setGender('여자');
        }
    }, []);

    return (
        <Controller
            name={data.inputValue}
            control={control}
            rules={{ required: data.essential }}
            render={({ field: { onChange } }) => (
                <Select
                    styles={selectStyle}
                    placeholder={gender || data.explanation}
                    onChange={e => {
                        onChange(e?.value);
                    }}
                    options={SelectOptions}
                    instanceId={useId()}
                    isDisabled={gender ? true : false}
                />
            )}
        />
    );
};

export default SelectBox;
