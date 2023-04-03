import styled from 'styled-components';

const LI = {
    InputWrapper: styled.div`
        position: relative;
        width: 18.375rem;
        height: 3.1875rem;
    `,

    Input: styled.input`
        padding-left: 3.25rem;
        width: inherit;
        height: inherit;
        font-weight: 400;
        font-size: 0.875rem;
        border: 2px solid rgba(232, 232, 232, 0.7);
        border-radius: 0.625rem;

        &::placeholder {
            color: #27639d;
        }
    `,

    ImgWrapper: styled.div`
        position: absolute;
        top: 0.9375rem;
        left: 1.25rem;
        width: 1.25rem;
        height: 1.25rem;
    `,
};

const II = {
    InputWrapper: styled.div`
        position: relative;
        width: 18.375rem;
        height: 3.1875rem;
    `,

    Input: styled.input`
        padding-left: 1.3125rem;
        width: inherit;
        height: inherit;
        font-weight: 400;
        font-size: 0.875rem;
        border: 2px solid rgba(232, 232, 232, 0.7);
        border-radius: 0.625rem;

        &::placeholder {
            color: #27639d;
        }
    `,
};

const SB = {
    Button: styled.button`
        width: 18.375rem;
        height: 3.1875rem;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0.625rem;
    `,
};

export { LI, II, SB };
