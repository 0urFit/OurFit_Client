import styled from 'styled-components';

const DL = {
    PageLayout: styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Open+Sans&display=swap');
        font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Open Sans', sans-serif;
        position: relative;
        margin: 0 auto;
        width: 24.375rem;
        min-width: 25rem;
        height: 52.75rem;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
        border-radius: 0.9375rem;

        @media screen and (max-width: 500px) {
            width: 100vw;
            height: 100vh;
        }
    `,
    ImgWrapper: styled.div`
        position: absolute;
        top: 1.25rem;
        left: 1.25rem;
        cursor: pointer;
    `,
    FirstContainer: styled.div`
        display: inline-block;
        margin: 2.5rem 3rem;
        width: calc(100% - 6rem);
        height: calc(100% - 5rem);
    `,
    SecondContainer: styled.div`
        position: relative;
        display: inline-block;
        margin: 2rem 1.125rem 0.625rem;
        width: calc(100% - 2.25rem);
        height: calc(100% - 2.625rem);
    `,
};

export { DL };
