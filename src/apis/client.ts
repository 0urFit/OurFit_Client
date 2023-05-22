import axios from 'axios';

const API_URL = 'https://www.ourfit.shop';
const REDIRECT_URI = 'http://localhost:3000/verifying';

export const KAKAO_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8;',
    },
});

export const mainInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8;',
    },
});

mainInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const socialInstance = axios.create({
    baseURL: API_URL,
});
