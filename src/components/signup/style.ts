import styled from 'styled-components';

const SU = {
    InputList: styled.form`
        width: 100%;
        height: calc(100% - 3.1875rem);
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
    InputWrapper: styled.div`
        margin-top: 0.625rem;
    `,
    InputTitle: styled.p`
        margin-bottom: 0.625rem;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.0625rem;
    `,
    ErrorMessage: styled.p`
        margin-top: 0.3125rem;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.0625rem;
        color: #ff0000;
    `,
    ButtonWrapper: styled.div`
        position: sticky;
        bottom: 0;
        width: 100%;
        height: 3.1875rem;
    `,
    CheckboxWrapper: styled.div`
        margin-top: 2rem;
        margin-bottom: 0.9375rem;
        width: inherit;
    `,
    SelectAllWrapper: styled.div`
        width: inherit;
        height: 1.5625rem;
        border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.3);
    `,
    SelectEachWrapper: styled.div`
        margin-top: 0.875rem;
    `,
    Span: styled.span`
        margin-left: 0.375rem;
        font-weight: 400;
        font-size: 0.875rem;
    `,
};

export { SU };
