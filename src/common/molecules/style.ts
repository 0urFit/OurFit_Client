import Link from 'next/link';
import { StyledProps } from './type';
import styled from 'styled-components';

const LI = {
    InputWrapper: styled.div<StyledProps>`
        position: relative;
        width: 100%;
        height: 3.1875rem;
        margin-bottom: 1.25rem;

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
        border: 0.0625rem solid black;
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
        width: 100%;
        height: 3.1875rem;
    `,
    Input: styled.input`
        padding-left: 1rem;
        width: inherit;
        height: inherit;
        font-weight: 400;
        font-size: 0.875rem;
        border: 0.0625rem solid black;
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
    Button: styled.button<StyledProps>`
        width: 100%;
        height: 3.75rem;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.25rem;
        text-align: center;
        color: #ffffff;
        border-radius: 0.625rem;
        background-color: ${({ $isSaved }) => ($isSaved ? '#e1e2e3' : '#3179ee')};
    `,
};

const BB = {
    BottomBarList: styled.ul`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: inherit;
        height: inherit;
        background-color: #fff;
    `,
    ItemWrapper: styled(Link)`
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
        color: black;
    `,
};

const RC = {
    CardBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.875rem;
        margin-top: 0.625rem;
        padding-bottom: 0.625rem;
        border-bottom: 0.0625rem solid #e1e2e3;

        &:first-child {
            margin-top: 0;
        }
    `,
    CardWrapper: styled.div`
        display: flex;
        width: 100%;
        height: 100%;
    `,
    ImgWrapper: styled.div`
        position: relative;
        width: 6.25rem;
        height: 6.25rem;
        overflow: hidden;
        border-radius: 0.3rem;
    `,
    DescWrapper: styled.div`
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        margin-left: 0.5rem;
        width: calc(100% - 6.75rem);
    `,
    span: styled.span`
        font-weight: 600;
        color: black;
    `,
    ul: styled.ul`
        display: flex;
        align-items: center;
    `,
    li: styled.li`
        margin-right: 0.3125rem;
        color: #232323;
        font-size: 0.75rem;

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
    BtnWrapper: styled.div<StyledProps>`
        width: 4.375rem;
        height: 1.5625rem;
        background-color: ${({ enrolled }) => (enrolled ? '#e1e2e3' : '#317aee')};
        border-radius: 0.25rem;
    `,
    DeleteWrapper: styled.div`
        width: 4.375rem;
        height: 1.5625rem;
        background-color: red;
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

const LC = {
    LikeIconBtn: styled.button`
        position: relative;
        width: 1.875rem;
        height: 1.875rem;
        margin-right: 1rem;
        cursor: pointer;
    `,
};

const PC = {
    CardBox: styled.div`
        width: 22.125rem;
        height: auto;
        margin-bottom: 0.625rem;
        border-bottom: 0.0625rem solid #626161;
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

const PB = {
    ImgWrapper: styled.button`
        position: relative;
        z-index: 999;
    `,
};

const PP = {
    PrepareBox: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    IconWrapper: styled.div`
        position: relative;
        width: 6.25rem;
        height: 6.25rem;
    `,
    Message: styled.span`
        margin-top: 1.25rem;
        font-weight: bold;
        font-size: 1.25rem;
    `,
};

const RM = {
    Box: styled.div`
        z-index: 11;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
};

const BD = {
    Box: styled.div`
        z-index: 10;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: rgba(11, 19, 30, 0.37);
        backdrop-filter: blur(0.0938rem);
    `,
};

const NE = {
    Box: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
    `,
    Title: styled.p`
        font-size: 1.5rem;
        font-weight: bold;
    `,
};

const RCM = {
    Box: styled(RM.Box)`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        height: 12.5rem;
        padding: 0.75rem;
        border-radius: 10px;
        background-color: #fff;
    `,
    Title: styled.p`
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5;
    `,
    LoadingTitle: styled.span`
        color: #3179ee;
    `,
};

export { LI, II, TI, SB, CB, BB, RC, PC, EM, PB, LC, PP, RM, BD, NE, RCM };
