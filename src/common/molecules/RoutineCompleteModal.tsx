import React from 'react';

import { COMPELTE_ROUTINE_MESSAEG } from '@/utils/constants';

import { RCM } from './style';

const RoutineCompleteModal = () => {
    return (
        <RCM.Box>
            <RCM.Title>{COMPELTE_ROUTINE_MESSAEG}</RCM.Title>
            <RCM.LoadingTitle>마이페이지로 이동중...</RCM.LoadingTitle>
        </RCM.Box>
    );
};

export default RoutineCompleteModal;
