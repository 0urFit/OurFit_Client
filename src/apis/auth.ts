import { instance } from './client';

interface LoginApiType {
    email: string;
    password: string;
}

export const LocalLogin = async (loginData: LoginApiType) => {
    return await instance.post('/login', loginData);
};

export const LocalNickname = async (nickname: string) => {
    return await instance.get(`/checknick/${nickname}`);
};
