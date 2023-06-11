import styled from 'styled-components';

const H = {
    LogoBox: styled.div`
        position: relative;
        width: 100%;
        height: 1.25rem;
        margin: 0 auto;
        margin-bottom: 1.2219rem;
    `,
    SelectBox: styled.div`
        display: flex;
        justify-content: right;
        margin-bottom: 0.625rem;
    `,
    RoutineListBox: styled.div`
        height: 39.5rem;
        overflow-y: scroll;
        margin-bottom: 0.625rem;
        padding-top: 0.625rem;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
};

const HD = {
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
    `,
    RoutineDescBox: styled.div`
        position: relative;
        width: 100%;
        height: 43.75rem;
        border: 0.0625rem solid #e1e2e3;
        border-top-left-radius: 2.5rem;
        border-top-right-radius: 2.5rem;
        background-color: #ededed;
        overflow-x: scroll;
    `,
    OverviewBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 3rem;
        left: 1.125rem;
        width: 22.125rem;
        height: 8.5rem;
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
        padding: 10px;
    `,
    RoutineSlideBox: styled.div`
        display: flex;
        position: absolute;
        top: 12.1875rem;
        width: inherit;
        height: 26.125rem;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            display: none;
        }
    `,
    RoutineDetailBox: styled.div`
        min-width: 14.625rem;
        height: inherit;
        margin-right: 15px;
        border-radius: 0.3125rem;
        background-color: #fff;

        &:first-child {
            margin-left: 1.125rem;
        }
    `,
    FooterBox: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0.625rem;
        right: 1.125rem;
    `,
};

export { H, HD };
