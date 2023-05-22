import { Cookies } from 'react-cookie';

export const cookies = new Cookies();

const setRefreshToken = (refreshToken: string) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('refresh_token', refreshToken, {
        sameSite: 'strict',
        path: '/',
        expires: new Date(expireDate),
    });
};

const getCookie = () => {
    return cookies.get('refresh_token');
};

export { setRefreshToken, getCookie };
