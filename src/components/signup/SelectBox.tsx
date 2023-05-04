import Select, { CSSObjectWithLabel } from 'react-select';
import { Control, Controller } from 'react-hook-form';
import { SelectOptions } from '@/data/SignUpData';
import { useId } from 'react';
import { InputType, ItemType } from './type';

interface propsType {
    control: Control<InputType, boolean>;
    data: ItemType;
}

const SelectBox = ({ control, data }: propsType) => {
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

    return (
        <Controller
            name={data.inputValue}
            control={control}
            rules={{ required: data.essential }}
            render={({ field: { onChange } }) => (
                <Select
                    styles={selectStyle}
                    placeholder={data.explanation}
                    onChange={dateString => {
                        onChange(dateString?.value);
                    }}
                    options={SelectOptions}
                    instanceId={useId()}
                />
            )}
        />
    );
};

export default SelectBox;
