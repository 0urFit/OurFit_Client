import styled from 'styled-components';

const DL = {
    PageLayout: styled.div`
        position: relative;
        width: 24.375rem;
        height: 52.75rem;
        background-color: #bfbfbf;
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
        min-width: calc(100% - 6rem);
        min-height: calc(100% - 5rem);
    `,

    SecondContainer: styled.div`
        display: inline-block;
        margin: 2.5rem 1.125rem 1rem;
        min-width: calc(100% - 2.25rem);
        min-height: calc(100% - 3.5rem);
    `,
};

export { DL };
