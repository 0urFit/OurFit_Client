import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { CSSProperties } from 'styled-components';

import { CB } from './style';

interface propsType {
    message: string;
    handleSubmit?: () => void;
}

const CreateButton = ({ message, handleSubmit }: propsType) => {
    const currentLocation = useRouter().asPath;
    const [width, setWidth] = useState<CSSProperties>({});

    useEffect(() => {
        if (currentLocation.includes('home')) {
            setWidth({ width: '19.25rem' });
        }
    }, []);

    return (
        <CB.Button style={width} onClick={handleSubmit}>
            {message}
        </CB.Button>
    );
};

export default CreateButton;
