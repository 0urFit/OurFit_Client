import { instance, socialInstance, tokenInstance } from './client';
import { InputType } from '@/components/signup/type';
import { ProfileInfoEditType } from '@/components/mypage/types';
import { LoginApiType } from './type';

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
    return await tokenInstance.get('/mypage/exercise', {
        params: {
            category: category,
        },
    });
};

export const SaveRoutineDetail = async (routineId: number, week: number) => {
    return await tokenInstance.get(`/mypage/exercise/${routineId}/${week}`);
};

export const RoutineSuccess = async (routindId: number, week: number, day: string) => {
    return await tokenInstance.post(`/mypage/exercise/${routindId}/complete`, {
        week,
        day,
    });
};

export const GetRoutine = async (endpoint: string | undefined) => {
    return await tokenInstance.get(`/exercise/${endpoint}`);
};

export const GetDetailRoutine = async (routineId: number, week: number) => {
    return await tokenInstance.get(`/exercise/${routineId}/week/${week}`);
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

export const GetUserInfo = async () => {
    return await tokenInstance.get('/mypage');
};

export const EditUserInfo = async (editedUserInfoData: ProfileInfoEditType) => {
    return await tokenInstance.patch('/mypage/u', editedUserInfoData);
};
