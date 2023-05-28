import Select, { StylesConfig } from 'react-select';
import { Dispatch, SetStateAction, useId } from 'react';
import { SelectType } from '@/components/save/type';

interface propsType {
    placeholder: string;
    options: SelectType[];
    setSelectedValue: Dispatch<SetStateAction<string>>;
}

const SmallSelect = ({ placeholder, options, setSelectedValue }: propsType) => {
    const selectStyle: StylesConfig = {
        placeholder: baseStyles => ({
            ...baseStyles,
            color: '#000',
            fontSize: '0.8rem',
            fontWeight: '400',
        }),
        control: baseStyles => ({
            ...baseStyles,
            paddingLeft: '0.375rem',
            width: '6.25rem',
            minHeight: '1.9rem',
            borderColor: 'black',
            borderRadius: '0.3125rem',
            boxShadow: 'none',
            fontSize: '0.8rem',
            fontWeight: '400',
        }),
        option: (baseStyles, { isSelected, isFocused }) => ({
            ...baseStyles,
            color: isSelected ? '#FFF' : 'black',
            fontWeight: '400',
            fontSize: '0.875rem',
            backgroundColor: isSelected ? 'black' : isFocused ? '#acacac' : '#fff',
        }),
        dropdownIndicator: () => ({
            display: 'none',
        }),
        indicatorsContainer: () => ({
            display: 'none',
        }),
    };

    return <Select styles={selectStyle} placeholder={placeholder} options={options} onChange={e => setSelectedValue((e as SelectType).value)} instanceId={useId()} />;
};

export default SmallSelect;
