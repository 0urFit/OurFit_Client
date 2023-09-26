import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const manageRefreshToken = {
    GET: () => {
        return cookies.get('refresh_token');
    },
    SET: (token: string) => {
        cookies.set('refresh_token', token);
    },
    REMOVE: () => {
        cookies.remove('refresh_token', { path: '/' });
    },
};
