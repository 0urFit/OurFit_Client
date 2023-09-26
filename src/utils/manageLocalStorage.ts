export const manageAccessToken = {
    GET: () => {
        return localStorage.getItem('access_token');
    },
    SET: (token: string) => {
        return localStorage.setItem('access_token', token);
    },
    REMOVE: () => {
        return localStorage.removeItem('access_token');
    },
};
