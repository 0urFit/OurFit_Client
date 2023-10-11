import { TOKEN } from './constants';

export const manageAccessToken = {
    GET: () => {
        return localStorage.getItem(TOKEN.ACCESS_TOKEN_KEY);
    },
    SET: (token: string) => {
        return localStorage.setItem(TOKEN.ACCESS_TOKEN_KEY, token);
    },
    REMOVE: () => {
        return localStorage.removeItem(TOKEN.ACCESS_TOKEN_KEY);
    },
};
