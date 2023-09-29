import React from 'react';

import { ClipLoader } from 'react-spinners';

import { RM } from './style';

const override: React.CSSProperties = {
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
    width: '3.125rem',
    height: '3.125rem',
};

const RoutineModal = () => {
    return (
        <RM.Box>
            <ClipLoader color="#36d7b7" loading={true} cssOverride={override} />
        </RM.Box>
    );
};

export default RoutineModal;
