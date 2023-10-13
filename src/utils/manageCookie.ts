import { Cookies } from 'react-cookie';
import { TOKEN } from './constants';

const cookies = new Cookies();

export const manageRefreshToken = {
    GET: () => {
        return cookies.get(TOKEN.REFRESH_TOKEN_KEY);
    },
    SET: (token: string) => {
        return cookies.set(TOKEN.REFRESH_TOKEN_KEY, token);
    },
    REMOVE: () => {
        return cookies.remove(TOKEN.REFRESH_TOKEN_KEY, { path: '/' });
    },
};
