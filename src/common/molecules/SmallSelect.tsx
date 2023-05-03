import Select, { CSSObjectWithLabel } from 'react-select';
import { useId } from 'react';
import { SelectType } from '@/components/save/type';
import { optionType } from './type';

interface propsType {
    placeholder: string;
    options: SelectType[];
}

const SmallSelect = ({ placeholder, options }: propsType) => {
    const selectStyle = {
        placeholder: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            color: '#000',
            fontSize: '0.8rem',
            fontWeight: '400',
        }),
        control: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            paddingLeft: '0.375rem',
            width: '6.25rem',
            minHeight: '1.9rem',
            border: 'none',
            borderRadius: '0.3125rem',
            boxShadow: 'none',
            fontSize: '0.8rem',
            fontWeight: '400',
        }),
        dropdownIndicator: () => ({
            display: 'none',
        }),
        option: (baseStyles: CSSObjectWithLabel, { isSelected, isFocused }: optionType) => ({
            ...baseStyles,
            color: isSelected ? '#FFF' : 'black',
            fontWeight: '400',
            fontSize: '0.875rem',
            backgroundColor: isSelected ? 'black' : isFocused ? '#acacac' : '#fff',
        }),
    };

    return (
        <Select
            styles={selectStyle}
            components={{
                IndicatorSeparator: () => null,
            }}
            placeholder={placeholder}
            options={options}
            instanceId={useId()}
        />
    );
};

export default SmallSelect;
