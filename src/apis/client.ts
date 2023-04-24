import axios from 'axios';

const API_URL = 'https://www.ourfit.shop';

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8;',
    },
});
