import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const manageRefreshToken = {
    GET: () => {
        return cookies.get('refresh_token');
    },
    SET: (token: string) => {
        return cookies.set('refresh_token', token);
    },
    REMOVE: () => {
        return cookies.remove('refresh_token', { path: '/' });
    },
};
