import styled from 'styled-components';

const DL = {
    PageLayout: styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Open+Sans&display=swap');
        font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Open Sans', sans-serif;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 5%);
        width: 24.375rem;
        height: 52.75rem;
        box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
        border-radius: 0.9375rem;

        @media screen and (max-width: 27.5rem) {
            width: 100vw;
            min-width: 22.5rem;
            height: 100vh;
            left: 0;
            transform: none;
        }
    `,
    ImgWrapper: styled.div`
        position: absolute;
        top: 1.25rem;
        left: 1.25rem;
        cursor: pointer;
    `,
    FirstContainer: styled.div`
        display: flex;
        align-items: center;
        position: relative;
        margin: 2.5rem 3rem;
        width: calc(100% - 6rem);
        height: calc(100% - 5rem);
    `,
    SecondContainer: styled.div`
        position: relative;
        display: inline-block;
        margin: 2rem 1.125rem 0.625rem 1.125rem;
        width: calc(100% - 2.25rem);
        height: calc(100% - 2.625rem);
    `,
};

export { DL };
