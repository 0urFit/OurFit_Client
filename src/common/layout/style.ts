import styled from 'styled-components';

const DL = {
    PageLayout: styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
        font-family: 'Roboto', sans-serif;
        position: relative;
        width: 24.375rem;
        height: 52.75rem;
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
        overflow-y: scroll;
    `,
    SecondContainer: styled.div`
        display: inline-block;
        margin: 2.5rem 1.125rem 1rem;
        width: calc(100% - 2.25rem);
        height: calc(100% - 3.5rem);
        overflow-y: scroll;
    `,
};

export { DL };
