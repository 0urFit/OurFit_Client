import styled from 'styled-components';

const Btn = {
    BtnWrapper: styled.div`
        width: 18.375rem;
        height: 3.1875rem;
        margin-bottom: 0.625rem;
        border-radius: 0.625rem;
        background-color: rgba(0, 0, 0, 0.3);
    `,
    Btn: styled.button`
        display: inline-block;
        width: inherit;
        height: inherit;
        border-radius: 0.625rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: #fff;
    `,
};

export const LI = {
    Box: styled.div`
        text-align: center;
        width: 100%;
    `,
    LogoWrapper: styled.div`
        margin-bottom: 2.4719rem;
    `,
    LoginForm: styled.form``,
    InputWrapper: styled.div`
        position: relative;
        margin-bottom: 0.9375rem;
        width: 18.375rem;
        height: 3.1875rem;
        border-radius: 0.625rem;
    `,
    EmailInput: styled.input`
        display: inline-block;
        padding-left: 51px;
        width: 100%;
        height: 100%;
        font-size: 14px;
        border-radius: inherit;
    `,
    PwInput: styled.input`
        display: inline-block;
        padding-left: 51px;
        width: 100%;
        height: 100%;
        font-size: 14px;
        border-radius: inherit;
    `,
    IconWrapper: styled.div`
        position: absolute;
        top: 1rem;
        left: 1.25rem;
    `,
    LoginBtnWrapper: styled(Btn.BtnWrapper)`
        width: 100%;
    `,
    KakaoBtnWrapper: styled(Btn.BtnWrapper)`
        background-color: rgba(254, 229, 0, 0.9);
        width: 100%;
    `,
    KakaoBtn: styled(Btn.Btn)`
        color: #000;
    `,
    SignUpLinkBtnWrapper: styled.div`
        text-align: center;
        width: 100%;
    `,
    SignUpLinkBtn: styled.button`
        font-size: 0.9375rem;
    `,
};
