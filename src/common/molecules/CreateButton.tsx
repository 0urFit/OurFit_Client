import { useEffect, useState } from 'react';

import { SaveRoutineInfo } from '@/apis/apiService';
import getErrorMessage from '@/utils/getErrorMessage';

import { CB } from './style';

interface propsType {
    message: string;
    isEnrolled?: boolean;
    routindId: number;
}

const CreateButton = ({ message, isEnrolled, routindId }: propsType) => {
    const [isSaved, setIsSaved] = useState<boolean | undefined>();

    const handleSaveRoutine = async () => {
        try {
            const response = await SaveRoutineInfo(routindId);
            const { success } = response.data;
            setIsSaved(success);
        } catch (e) {
            throw new Error(getErrorMessage(e));
        }
    };

    useEffect(() => {
        setIsSaved(isEnrolled);
    }, [isEnrolled]);

    return (
        <CB.Button disabled={isSaved} onClick={handleSaveRoutine} $isSaved={isSaved}>
            {message}
        </CB.Button>
    );
};

export default CreateButton;
