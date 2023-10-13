import styled from 'styled-components';

const MP = {
    DescFormBox: styled.form`
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(8, 1fr);
        width: 100%;
        height: 15.625rem;
        margin-bottom: 1.5625rem;
        border: 0.0625rem solid #e1e2e3;
        border-radius: 0.3125rem;
    `,

    DescTitle: styled.h1``,
    ProfileInfoEdit: styled.button`
        justify-self: end;
        margin-right: 0.625rem;
    `,
    ProfileInfoEditSuccess: styled.button`
        justify-self: end;
        margin-right: 0.625rem;
    `,
    ContentsValue: styled.div``,
    BottomWrapper: styled.div`
        position: absolute;
        bottom: 4.375rem;
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
        font-size: 1.25rem;
        font-weight: 43.75rem;
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
        font-size: 1.5rem;
        font-weight: 800;
    `,
    LikedList: styled.div`
        height: auto;
    `,
};

export { MP, ML };
