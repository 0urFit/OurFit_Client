import styled from 'styled-components';

const DL = {
    PageLayout: styled.div`
        position: relative;
        margin: auto;
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
        padding: 2.5rem 3rem;
        width: inherit;
        height: inherit;
    `,

    SecondContainer: styled.div`
        padding: 2.5rem 1.125rem 1rem;
        width: inherit;
        height: inherit;
    `,
};

export { DL };
