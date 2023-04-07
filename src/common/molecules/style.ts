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

const BB = {
    BottomBarList: styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 22.125rem;
        height: 4.375rem;
        border: 1px solid #000000;
        border-radius: 2.5rem;
    `,

    ItemWrapper: styled.li`
        margin: auto 0;
        text-align: center;
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
        border: 1px solid #e1e2e3;
        border-radius: 0.3125rem;
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
        border-radius: 5px;
    `,
    DescWrapper: styled.div`
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        margin-left: 1rem;
    `,
    span: styled.span`
        font-size: 1.5rem;
        font-weight: bold;
    `,
    ul: styled.ul`
        display: flex;
        align-items: center;
    `,
    li: styled.li`
        margin-right: 0.3125rem;

        &:last-child {
            margin-right: 0;
        }
    `,
    DescFooterWrapper: styled.div`
        display: flex;
    `,
    CoachNameWrapper: styled.div`
        display: flex;
        align-items: end;
    `,
    CoachName: styled.span`
        font-size: 0.75rem;
        font-weight: bold;
        color: #e1e2e3;
    `,
    ClickWrapper: styled.div`
        display: flex;
        margin-left: 3.5rem;
    `,
    LikeIconWrapper: styled.div`
        width: 1.5625rem;
        height: 1.5625rem;
        margin-right: 0.4375rem;
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
        height: 70px;
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
        font-size: 1rem;
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
        font-size: 0.75rem;
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

export { LI, II, SB, BB, RC, PC };
