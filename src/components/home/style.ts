import styled from 'styled-components';

const H = {
    Box: styled.div`
        height: 100%;
    `,
    SelectBox: styled.div`
        display: flex;
        justify-content: right;
    `,
    RoutineListBox: styled.div`
        height: calc(100% - 2rem);
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
};

const HD = {
    Box: styled.div`
        position: relative;
        height: 100%;
    `,
    RoutineTitleBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 9rem;
    `,
    RoutineTitle: styled.span`
        font-size: 1.875rem;
        font-weight: bold;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `,
    RoutineDescBox: styled.div`
        position: relative;
        width: 100%;
        height: calc(100% - 9rem);
        border: 0.0625rem solid #e1e2e3;
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
        background-color: #ccc;
    `,
    RoutineMain: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: inherit;
        margin-top: 0.625rem;
    `,
    WeekSelectBox: styled.div`
        display: flex;
        justify-content: right;
        width: 90%;
        margin: 0.625rem 1.25rem 0 1.25rem;
    `,
    OverviewBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 8.5rem;
        margin-bottom: 0.625rem;
        border-radius: 0.3125rem;
        background-color: #fff;
    `,
    OverviewDataTable: styled.table`
        width: 20.3125rem;
        height: 6.5625rem;
        text-align: left;
        table-layout: fixed;
    `,
    Tbody: styled.tbody``,
    Thead: styled.thead``,
    Th: styled.th`
        font-weight: 700;
    `,
    Tr: styled.tr``,
    ContentTitle: styled.td`
        vertical-align: middle;
        font-size: 0.8125rem;
    `,
    Content: styled.td`
        vertical-align: middle;
        font-size: 0.8125rem;
        color: #b4b4b4;
    `,
    JustSpacing: styled.td`
        padding: 0.625rem;
    `,
    RoutineSlideBox: styled.div`
        display: flex;
        width: inherit;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
    RoutineDetailBox: styled.div`
        width: 100%;
        height: inherit;
        min-width: 14.625rem;
        margin-right: 0.9375rem;
        border-radius: 0.3125rem;
        background-color: #fff;
        overflow-y: scroll;

        &:first-child {
            margin-left: 1.125rem;
        }

        &::-webkit-scrollbar {
            display: none;
        }
    `,
    Day: styled.div`
        text-align: center;
        margin-top: 0.625rem;
        font-weight: bold;
    `,
    ExerciseDetailBox: styled.div`
        min-width: 12.75rem;
        margin: 1rem 0.9375rem;
    `,
    FooterBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0.625rem;
        width: 100%;
    `,
    ExerciseCardItem: styled.div`
        margin-bottom: 0.9375rem;

        &:last-child {
            margin-bottom: 0;
        }
    `,
    ExerciseTitle: styled.div`
        font-weight: bold;
    `,
    ExerciseTable: styled.table`
        width: 100%;
    `,
    ExerciseThead: styled.thead`
        line-height: 2.5rem;
    `,
    ExerciseTr: styled.tr`
        display: flex;
        justify-content: space-between;
    `,
    ExerciseTh: styled.th``,
    ExerciseDetailTbody: styled.tbody``,
    ExerciseDetailTd: styled.td`
        margin-bottom: 0.3125rem;
        padding: 0 0.625rem;
    `,
};

export { H, HD };
