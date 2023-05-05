import styled from 'styled-components';

const H = {
    LogoBox: styled.div`
        text-align: center;
        margin-bottom: 1.2219rem;
    `,
    SelectBox: styled.div`
        display: flex;
        justify-content: right;
        margin-bottom: 0.625rem;
    `,
    RoutineListBox: styled.div`
        height: 39.5rem;
        overflow-y: scroll;
        margin-bottom: 0.625rem;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
};

export { H };
