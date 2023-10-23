export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const KAKAO_API_URL = process.env.NEXT_PUBLIC_KAKAO_API_URL;

export const AUTH = {
    LOGIN: '/login',
    KAKAO: '/kakao',
    NEWTOKEN: '/newtoken',
    SIGNUP: '/signup',
    CHECKNICK: '/checknick',
    CHECKEMAIL: '/checkemail',
};

export const MYPAGE = {
    MYPAGE: '/mypage',
    MYAPGE_EXERCISE: '/mypage/exercise',
    MYPAGE_LIKE: '/mypage/like',
    MYPAGE_UPDATE: '/mypage/u',
    COMPLETE: '/complete',
};

export const EXERCISE = {
    EXERCISE: '/exercise',
    EXERCISE_ENROLLED: '/exercise/enrolled',
    WEEK: '/week',
    LIKES: '/likes',
};

export const API_METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};

export const EXPIRED_REFRESH_TOKEN_MESSAGE = '리프레시 토큰이 만료되었습니다.';
