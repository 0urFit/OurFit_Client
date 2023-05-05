import { StyledProps } from './type';
import styled from 'styled-components';

const LI = {
    InputWrapper: styled.div<StyledProps>`
        position: relative;
        width: 18.375rem;
        height: 3.1875rem;

        &:nth-child(1) {
            margin-bottom: ${({ emailMargin }) => (emailMargin ? '0' : '0.9375rem')};
        }

        &:nth-child(2) {
            margin-bottom: ${({ pwMargin }) => (pwMargin ? '0' : '1.5rem')};
        }
    `,
    Input: styled.input`
        padding-left: 3.25rem;
        width: inherit;
        height: inherit;
        font-weight: 400;
        font-size: 0.875rem;
        border: none;
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
        padding-left: 1rem;
        width: inherit;
        height: inherit;
        font-weight: 400;
        font-size: 0.875rem;
        border: 1px solid black;
        border-radius: 0.625rem;

        &::placeholder {
            color: #27639d;
        }

        &:focus {
            outline: none;
        }

        &[type='number']::-webkit-outer-spin-button,
        &[type='number']::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    `,
};

const TI = {
    InputWrapper: styled.div`
        position: relative;
        width: 22.125rem;
        height: 3.1875rem;
    `,
    Input: styled.input`
        padding-left: 1rem;
        width: inherit;
        height: inherit;
        font-weight: 400;
        font-size: 0.875rem;
        border: none;
        border-radius: 0.625rem;

        &::placeholder {
            color: #27639d;
        }
    `,
};

const SB = {
    Button: styled.input`
        display: inline-block;
        width: inherit;
        height: inherit;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        color: #ffffff;
        background-color: ${props => (props.disabled ? '#ccc' : '#868686')};
        border: none;
        border-radius: 0.625rem;
        cursor: pointer;
    `,
};

const CB = {
    Button: styled.button`
        width: 22.125rem;
        height: 3.75rem;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        color: #ffffff;
        border-radius: 0.625rem;
        background-color: #868686;
    `,
};

const BB = {
    BottomBarList: styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 22.125rem;
        height: 4.375rem;
        border: 1px solid #000000;
        border-radius: 2.5rem;
        background-color: #fff;
    `,
    ItemWrapper: styled.li`
        margin: auto 0;
        text-align: center;
        cursor: pointer;
    `,
    ImgWrapper: styled.div`
        margin: 0 auto;
        width: 1.5625rem;
        height: 1.5625rem;
    `,
    Span: styled.span`
        text-align: center;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 0.75rem;
    `,
};

const RC = {
    CardBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22.125rem;
        height: 6.875rem;
        margin-top: 0.625rem;
        padding-bottom: 0.625rem;
        border-bottom: 1px solid #e1e2e3;

        &:first-child {
            margin-top: 0;
        }
    `,
    CardWrapper: styled.div`
        display: flex;
        width: 100%;
        margin: 0.3125rem;
    `,
    ImgWrapper: styled.div`
        width: 6.25rem;
        height: 6.25rem;
        overflow: hidden;
        border-radius: 0.3rem;
    `,
    DescWrapper: styled.div`
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        margin-left: 1rem;
        width: calc(100% - 6.25rem);
    `,
    span: styled.span`
        font-size: 1.5rem;
        font-weight: 400;
    `,
    ul: styled.ul`
        display: flex;
        align-items: center;
    `,
    li: styled.li`
        margin-right: 0.3125rem;
        color: #232323;
        font-size: 0.875rem;

        &:last-child {
            margin-right: 0;
        }
    `,
    DescFooterWrapper: styled.div`
        display: flex;
        width: 100%;
    `,
    CoachNameWrapper: styled.div`
        flex-grow: 1;
        display: flex;
        align-items: end;
    `,
    CoachName: styled.span`
        font-size: 0.75rem;
        font-weight: 400;
        color: #bdbdbd;
    `,
    ClickWrapper: styled.div`
        flex-wrap: 2;
        display: flex;
        justify-content: end;
    `,
    LikeIconWrapper: styled.div`
        width: 1.5625rem;
        height: 1.5625rem;
        margin-right: 0.4375rem;
        cursor: pointer;
    `,
    BtnWrapper: styled.div`
        width: 4.375rem;
        height: 1.5625rem;
        background-color: #317aee;
        border-radius: 0.3125rem;
    `,
    AddBtn: styled.button`
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background-color: inherit;
        font-weight: bold;
        color: #fff;
    `,
};

const PC = {
    CardBox: styled.div`
        width: 354px;
        height: auto;
        margin-bottom: 10px;
        border-bottom: 1px solid #626161;
        background-color: #bfbfbf;
    `,
    CardWrapper: styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 0.625rem 0.3125rem 0.625rem;
    `,
    Title: styled.p`
        margin-bottom: 0.375rem;
        font-size: 1.125rem;
        font-weight: bold;
        color: #fff;
    `,
    TagList: styled.ul`
        display: flex;
        justify-content: left;
        margin-bottom: 1.0625rem;
    `,
    TagItem: styled.li`
        margin-right: 0.3125rem;
        font-size: 1rem;
        color: #626161;

        &:last-child {
            margin-right: 0;
        }
    `,
    PostDate: styled.span`
        font-size: 0.75rem;
        color: #626161;
    `,
};

const EM = {
    ErrorMessageWrapper: styled.div`
        text-align: left;
        margin: 0.3125rem 0;
    `,
    Sentence: styled.span`
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.0625rem;
        color: #ff0000;
    `,
};

export { LI, II, TI, SB, CB, BB, RC, PC, EM };
