import styled from 'styled-components';

const SV = {
    Box: styled.div`
        width: 100%;
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
        margin-top: 1.25rem;
        width: inherit;
        height: calc(100% - 8.125rem);
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
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    `,
    TopBox: styled.div`
        width: inherit;
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
        display: flex;
        flex-grow: 1;
        padding: 1.125rem;
        background-color: #ededed;
        border-radius: 2.5rem 2.5rem 0rem 0rem;
        border-top: 0.0625rem solid #626161;
    `,
    MainBox: styled.div`
        flex-grow: 1;
        position: relative;
        text-align: center;
    `,
    Form: styled.form``,
    FormContents: styled.div`
        padding: 1rem 1.6875rem 0 1.6875rem;
        overflow-y: scroll;
    `,
    SubmitBtnWrapper: styled.div`
        position: absolute;
        bottom: 0;
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
        height: inherit;
    `,
    WeekButton: styled.button<{ currentDay: boolean }>`
        width: inherit;
        height: inherit;
        font-weight: 600;
        font-size: 0.75rem;
        color: ${props => (props.currentDay ? '#fff' : '#000')};
        background-color: ${props => (props.currentDay ? '#373737' : '#fff')};
        border-radius: 50%;
        cursor: pointer;
    `,
};

export { SV, BB, PN };
