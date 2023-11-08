import React from 'react';

import { CB } from './style';

interface RoutineCompleteButtonProps {
    message: string;
    isSaved?: boolean;
}

const RoutineCompleteButton = ({ message, isSaved }: RoutineCompleteButtonProps) => {
    return <CB.Button $isSaved={isSaved}>{message}</CB.Button>;
};

export default RoutineCompleteButton;
