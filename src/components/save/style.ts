import styled from 'styled-components';

const SV = {
    Box: styled.div`
        position: relative;
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
    BottomBox: styled.div`
        position: relative;
        width: inherit;
        height: calc(100% - 9rem);
        background: #ededed;
        border-top: 1px solid #626161;
        border-radius: 2.5rem 2.5rem 0rem 0rem;
    `,
    WeekWrapper: styled.div`
        margin: 1.125rem auto 0;
        width: 22.125rem;
        height: 3rem;
        display: flex;
    `,
    MainBox: styled.div`
        margin: 1rem auto 0;
        padding-top: 1.25rem;
        width: 22.125rem;
        height: 33rem;
        background-color: white;
        border-radius: 0.3125rem;
    `,
    MainWrapper: styled.div`
        margin: 0 auto;
        width: 18.75rem;
        height: 100%;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
    ListWrapper: styled.div`
        margin-bottom: 1.875rem;

        &:last-child {
            margin-bottom: 1.25rem;
        }
    `,
    ExerciseTitle: styled.p`
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
    `,
    Table: styled.table`
        width: 100%;

        & thead {
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.875rem;
        }

        & tbody {
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 1.375rem;
            color: #828282;
        }
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
    ButtonWrapper: styled.div`
        position: absolute;
        bottom: 0.625rem;
        left: 50%;
        transform: translate(-50%, 0);
    `,
};

const PN = {
    WeekButtonWrapper: styled.div`
        margin-right: 0.1875rem;
        width: 3rem;
        height: inherit;
    `,
    WeekButton: styled.button<{ currentWeek: boolean }>`
        width: inherit;
        height: inherit;
        font-weight: 600;
        font-size: 0.75rem;
        color: ${props => (props.currentWeek ? '#fff' : '#000')};
        background-color: ${props => (props.currentWeek ? '#373737' : '#fff')};
        border-radius: 50%;
        cursor: pointer;
    `,
};

export { SV, BB, PN };
