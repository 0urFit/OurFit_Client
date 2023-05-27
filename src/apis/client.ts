import { getRefreshToken, removeRefreshToken } from '@/utils/manageCookie';
import axios from 'axios';

const API_URL = 'https://www.ourfit.shop';
const REDIRECT_URI = 'http://localhost:3000/verifying';

export const KAKAO_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

let ACCESS_TOKEN;

if (typeof window !== 'undefined') {
    ACCESS_TOKEN = localStorage.getItem('access_token');
}

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
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

tokenInstance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const { config, response } = error;
        const { message } = response.data;

        if (response.status === 401) {
            if (message === '액세스 토큰이 만료되었습니다.') {
                const refreshToken = getRefreshToken();

                try {
                    const newAccessToken = await updateToken.post('/newtoken', {
                        refreshToken,
                    });
                    const { token } = newAccessToken.data.result;

                    localStorage.removeItem('access_token');
                    localStorage.setItem('access_token', token);

                    config.headers.Authorization = `Bearer ${token}`;

                    return axios(config);
                } catch (error: any) {
                    const { message } = error.response.data;

                    if (message === '리프레시 토큰이 만료되었습니다.') {
                        localStorage.removeItem('access_token');
                        removeRefreshToken();

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
