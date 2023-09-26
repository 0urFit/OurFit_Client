export const accessTokenManager = {
    GET: () => {
        return localStorage.getItem('access_token');
    },
    SET: (token: string) => {
        localStorage.setItem('access_token', token);
    },
    REMOVE: () => {
        localStorage.removeItem('access_token');
    },
};
