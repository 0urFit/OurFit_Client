import styled from 'styled-components';

const SV = {
    Box: styled.div`
        height: 100%;
    `,
    SelectWrapper: styled.div`
        width: fit-content;
        margin-left: auto;
    `,
    WarningBox: styled.div`
        position: relative;
        height: calc(100% - 6.275rem);
        text-align: center;
    `,
    WarningWrapper: styled.div`
        position: absolute;
        bottom: 0.625rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: fit-content;
    `,
    WarningMessage: styled.p`
        margin-top: 2.5rem;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.5rem;
    `,
    CardList: styled.div`
        height: calc(100% - 2rem);
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    `,
    ButtonWrapper: styled.div`
        position: absolute;
        bottom: 0;
        width: 100%;
        height: fit-content;
    `,
};

const BB = {
    Container: styled.div`
        height: 100%;
    `,
    TopBox: styled.div`
        height: 9rem;
        display: flex;
        text-align: center;
        align-items: center;
    `,
    TopWrapper: styled.div`
        margin: auto;
        width: fit-content;
        height: fit-content;
    `,
    Title: styled.p`
        margin-bottom: 0.75rem;
        font-weight: 600;
        font-size: 1.875rem;
        line-height: 2.25rem;
    `,
    TagWrapper: styled.ul`
        margin: 0 auto;
        width: fit-content;
    `,
    Tag: styled.li`
        margin-right: 0.625rem;
        float: left;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.1875rem;

        &:last-child {
            margin-right: 0;
        }
    `,
    MainContainer: styled.div`
        height: calc(100% - 9rem);
        padding: 0.5rem;
        background-color: #ededed;
        border-radius: 2.5rem 2.5rem 0 0;
        border-top: 0.0625rem solid #626161;
    `,
    Form: styled.form`
        height: calc(100% - 2.75rem);
        overflow-y: scroll;
    `,
    FormContents: styled.div``,
    SubmitBtnWrapper: styled.div`
        text-align: center;
        margin-top: 0.3125rem;
    `,
    WarningWrapper: styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    WarningMessage: styled.p`
        margin-top: 2rem;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.5rem;
    `,
};

const PN = {
    WeekButtonWrapper: styled.div`
        margin-right: 0.1875rem;
        width: 3rem;
    `,
    WeekButton: styled.button<{ currentDay: boolean }>`
        font-weight: 600;
        font-size: 0.75rem;
        color: ${props => (props.currentDay ? '#fff' : '#000')};
        background-color: ${props => (props.currentDay ? '#373737' : '#fff')};
        border-radius: 50%;
        cursor: pointer;
    `,
};

export { SV, BB, PN };
