import { useRouter } from 'next/router';
import { CB } from './style';
import { useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';

interface propsType {
    message: string;
}

const CreateButton = ({ message }: propsType) => {
    const currentLocation = useRouter().asPath.substring(0, 12);
    const [width, setWidth] = useState<CSSProperties>({});

    useEffect(() => {
        if (currentLocation === '/home/detail') {
            setWidth({ width: '19.25rem' });
        } else if (currentLocation === '/save/detail') {
            setWidth({ width: '22.125rem' });
        }
    }, []);

    return <CB.Button style={width}>{message}</CB.Button>;
};

export default CreateButton;
