import { manageRefreshToken } from '@/utils/manageCookie';
import { manageAccessToken } from '@/utils/manageLocalStorage';
import axios from 'axios';

const API_URL = 'http://43.200.180.163:8080/';
const REDIRECT_URI = 'http://localhost:3000/verifying';

export const KAKAO_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const updateToken = axios.create({
    baseURL: API_URL,
});

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8;',
    },
});

export const tokenInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8;',
    },
});

tokenInstance.interceptors.request.use(
    config => {
        config.headers.Authorization = `Bearer ${manageAccessToken.GET()}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

tokenInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const { config, response } = error;
        const { status } = response;
        const { message } = response.data;

        if (status === 401) {
            if (message === '액세스 토큰이 만료되었습니다.') {
                const refreshToken = manageRefreshToken.GET();

                try {
                    const newAccessToken = await updateToken.post('/newtoken', {
                        refreshToken,
                    });

                    const { accessToken } = newAccessToken.data.result;

                    manageAccessToken.REMOVE();
                    manageAccessToken.SET(accessToken);

                    config.headers.Authorization = `Bearer ${accessToken}`;

                    return axios(config);
                } catch (error: any) {
                    const { message } = error.response.data;

                    if (message === '리프레시 토큰이 만료되었습니다.') {
                        manageAccessToken.REMOVE();
                        manageRefreshToken.REMOVE();

                        window.location.href = '/';
                    }
                }
            }
        }
        return Promise.reject(error);
    },
);

export const socialInstance = axios.create({
    baseURL: API_URL,
});
