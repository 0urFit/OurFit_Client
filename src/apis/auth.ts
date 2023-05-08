import { InputType } from '@/components/signup/type';
import { instance, socialInstance } from './client';
interface LoginApiType {
    email: string;
    password: string;
}

export const LocalLogin = async (loginData: LoginApiType) => {
    return await instance.post('/login', loginData);
};

export const LocalSignUp = async (SignUpData: InputType) => {
    return await instance.post('/signup', {
        email: SignUpData.email,
        password: SignUpData.password,
        nickname: SignUpData.nickname,
        gender: SignUpData.gender,
        height: SignUpData.height,
        weight: SignUpData.weight,
        squat: SignUpData.squat,
        benchpress: SignUpData.benchpress,
        deadlift: SignUpData.deadlift,
        overheadpress: SignUpData.overheadpress,
    });
};

export const LocalNickname = async (nickname: string) => {
    return await instance.get(`/checknick/${nickname}`);
};

export const LocalEmail = async (email: string) => {
    return await instance.get(`/checkemail/${email}`);
};

export const SocialKakaoLogin = async (authCode: string | null) => {
    return await socialInstance.post('/auth/kakao/callback', null, {
        params: {
            authorizationCode: authCode,
        },
    });
};
