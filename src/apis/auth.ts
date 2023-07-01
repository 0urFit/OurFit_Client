import { InputType } from '@/components/signup/type';
import { instance, socialInstance, tokenInstance } from './client';
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

export const SocialKakaoLogin = async (authCode: string | undefined) => {
    return await socialInstance.get('/kakao', {
        params: {
            authorizationCode: authCode,
        },
    });
};

export const MainSave = async (category: string) => {
    return await tokenInstance.get('/mypage', {
        params: {
            category: category,
        },
    });
};

export const LikeIconClick = async (routineId: number | undefined) => {
    return await tokenInstance.post(`/exercise/${routineId}/likes`);
};

export const LikeIconUnclick = async (routineId: number | undefined) => {
    return await tokenInstance.delete(`/exercise/${routineId}/likes`);
};

export const SaveRoutineDetail = async (routineId: number, week: number) => {
    return await tokenInstance.get(`/mypage/exercise/${routineId}/${week}`);
};

export const RoutineSuccess = async (routineId: number, week: number, day: string, percent: number, lastday: boolean) => {
    console.log(routineId, week, day, percent, lastday);
    return await tokenInstance.patch('/mypage/exercise/complete', {
        params: {
            routineId,
            week,
            day,
            percent,
            lastday,
        },
    });
};

export const GetRoutine = async (endpoint: string | undefined) => {
    return await tokenInstance.get(`/exercise/${endpoint}`);
};

export const GetDetailRoutine = async (routineId: number, week: number) => {
    return await tokenInstance.get(`/exercise/${routineId}/${week}`);
};

export const SaveRoutineInfo = async (routineId: number | undefined) => {
    return await tokenInstance.post(`/exercise/${routineId}`);
};

export const DeleteRoutine = async (id: number | undefined) => {
    return await tokenInstance.delete(`/exercise/${id}`);
};

export const GetLikedRoutine = async () => {
    return await tokenInstance.get('/mypage/like');
};
