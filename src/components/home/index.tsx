import Image from 'next/image';
import { H } from './style';
import OurfitLogo from '../../../public/assets/Ourfit_logo.png';
import Select, { StylesConfig } from 'react-select';
import React, { useId } from 'react';

const Home = () => {
    const test = [
        { value: 'all', label: 'all' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const customStlyes: StylesConfig = {
        control: provided => ({
            ...provided,
            width: '6.25rem',
            height: '1.875rem',
            fontSize: '0.9375rem',
            boxSizing: 'border-box',
            minHeight: 0,
        }),
        dropdownIndicator: () => ({
            display: 'none',
        }),
        indicatorsContainer: () => ({
            display: 'none',
        }),
        placeholder: () => ({
            fontWeight: 'bold',
            color: '#000',
        }),
        option: (provided, { isFocused }) => ({
            ...provided,
            color: isFocused ? '#00A8E1' : 'black',
        }),
    };

    return (
        <>
            <H.LogoBox>
                <Image src={OurfitLogo} width={100} height={20} alt="로고" />
            </H.LogoBox>
            <H.SelectBox>
                <Select instanceId={useId()} placeholder="운동선택" options={test} styles={customStlyes} defaultValue={test[0]} />
            </H.SelectBox>
        </>
    );
};

export default Home;
