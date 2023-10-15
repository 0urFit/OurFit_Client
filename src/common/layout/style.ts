import styled from 'styled-components';
import { StyledProps } from '../molecules/type';

export const DL = {
    PageLayout: styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Open+Sans&display=swap');
        font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Open Sans', sans-serif;
        position: relative;
        left: 50%;
        transform: translate(-50%, 5%);
        width: 24.375rem;
        height: 52.75rem;
        border: 1px solid #888;

        @media screen and (max-width: 27.5rem) {
            width: 100%;
            min-width: 22.5rem;
            height: 100%;
            left: 0;
            transform: none;
        }
    `,
    AuthLayoutStyle: styled.div`
        display: flex;
        align-items: center;
        height: inherit;
        margin: 0 0.9375rem;
    `,
    PrevBtnWrapper: styled.div`
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
    `,
    Header: styled.header`
        position: sticky;
        top: 0;
        height: 3.75rem;
        text-align: center;
    `,
    Main: styled.main<StyledProps>`
        height: ${({ $isHeader }) => ($isHeader ? 'calc(100% - 7.5rem)' : 'calc(100% - 3.75rem)')};
    `,
    Nav: styled.nav`
        position: sticky;
        bottom: 0;
        width: inherit;
        height: 3.75rem;
    `,
};
