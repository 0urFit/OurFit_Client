import styled from 'styled-components';

const MP = {
    DescBox: styled.div`
        width: 100%;
        margin-bottom: 1.5625rem;
        border: 0.0625rem solid #e1e2e3;
        border-radius: 0.3125rem;
    `,
    DescTable: styled.table`
        width: inherit;
        border-collapse: separate;
        border-spacing: 10px;
    `,
    Thead: styled.thead``,
    Tbody: styled.tbody``,
    Tr: styled.tr``,
    Th: styled.th`
        text-align: left;
        font-weight: 900;
    `,
    EditButtonWrapper: styled.div`
        text-align: right;
    `,
    Editbutton: styled.button`
        padding: 0.1875rem;
        border-radius: 0.25rem;
        background-color: #888;
        color: #fff;
    `,
    contentTitle: styled.td`
        vertical-align: middle;
        width: 50%;
        border: 0.0625rem solid transparent;
        font-size: 13px;
    `,
    content: styled.td`
        vertical-align: middle;
        color: #e1e2e3;
        font-size: 13px;
    `,

    BottomWrapper: styled.div`
        position: absolute;
        bottom: 0;
        width: 100%;
    `,
    LikeListBox: styled.div`
        width: 100%;
        height: 16.8125rem;
        margin-bottom: 0.625rem;
    `,
    LikeHeader: styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.9375rem;
    `,
    Title: styled.span`
        font-size: 20px;
        font-weight: 700px;
    `,
    MoreBtnBox: styled.div`
        display: flex;
        justify-content: space-between;
    `,
    MoreIconWrapper: styled.div`
        margin-right: 0.1875rem;
    `,
    MoreBtn: styled.span``,
    LikeContentsBox: styled.div`
        height: 14.375rem;
        overflow-y: hidden;
    `,
    LogoutWrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    LogoutButton: styled.button`
        font-size: 0.875rem;
        font-weight: bold;
        color: red;
    `,
};

const ML = {
    MypageLikeBox: styled.div`
        height: 100%;
        margin: 0 1.125rem;
        overflow-y: scroll;
    `,
    TitleWrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6.8125rem;
    `,
    Title: styled.h1`
        font-size: 24px;
        font-weight: 800;
    `,
    LikedList: styled.div`
        height: auto;
    `,
};

export { MP, ML };
