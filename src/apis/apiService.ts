import { ApiInstance } from './apiClient';
import { InputType } from '@/components/signup/type';
import { ProfileInfoEditType } from '@/components/mypage/types';
import { LoginApiType } from './type';
import { AUTH, EXERCISE, MYPAGE } from './constants';

const instanceAuthenticated = new ApiInstance(true);
const instanceUnAuthenticated = new ApiInstance(false);

export const TokenUpdate = async (refreshToken: string) => {
    return await instanceUnAuthenticated.post(`${AUTH.NEWTOKEN}`, { refreshToken });
};

export const LocalLogin = async (loginData: LoginApiType) => {
    return await instanceUnAuthenticated.post(`${AUTH.LOGIN}`, loginData);
};

export const LocalSignUp = async (SignUpData: InputType) => {
    return await instanceUnAuthenticated.post(`${AUTH.SIGNUP}`, {
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
    return await instanceUnAuthenticated.get(`${AUTH.CHECKNICK}`, {
        params: {
            nick: nickname,
        },
    });
};

export const LocalEmail = async (email: string) => {
    return await instanceUnAuthenticated.get(`${AUTH.CHECKEMAIL}`, {
        params: {
            email,
        },
    });
};

export const SocialKakaoLogin = async (authCode: string | undefined) => {
    return await instanceUnAuthenticated.get(`${AUTH.KAKAO}`, {
        params: {
            authorizationCode: authCode,
        },
    });
};

export const MainSave = async (category: string) => {
    return await instanceAuthenticated.get(`${MYPAGE.MYAPGE_EXERCISE}`, {
        category,
    });
};

export const SaveRoutineDetail = async (routineId: number) => {
    return await instanceAuthenticated.get(`${MYPAGE.MYAPGE_EXERCISE}/${routineId}`);
};

export const RoutineSuccess = async (routindId: number, week: number | undefined | '', day: string) => {
    return await instanceAuthenticated.post(`${MYPAGE.MYAPGE_EXERCISE}/${routindId}${MYPAGE.COMPLETE}`, {
        week,
        day,
    });
};

export const GetRoutine = async (endpoint: string | undefined) => {
    return await instanceAuthenticated.get(`${EXERCISE.EXERCISE}/${endpoint}`);
};

export const GetDetailRoutine = async (routineId: number, week: number) => {
    return await instanceAuthenticated.get(`${EXERCISE.EXERCISE}/${routineId}${EXERCISE.WEEK}/${week}`);
};

export const SaveRoutineInfo = async (routineId: number | undefined) => {
    return await instanceAuthenticated.post(`${EXERCISE.EXERCISE}/${routineId}`);
};

export const DeleteRoutine = async (id: number | undefined) => {
    return await instanceAuthenticated.delete(`${EXERCISE.EXERCISE}/${id}`);
};

export const GetLikedRoutine = async () => {
    return await instanceAuthenticated.get(`${MYPAGE.MYPAGE_LIKE}`);
};

export const GetUserInfo = async () => {
    return await instanceAuthenticated.get(`${MYPAGE.MYPAGE}`);
};

export const EditUserInfo = async (editedUserInfoData: ProfileInfoEditType) => {
    return await instanceAuthenticated.patch(`${MYPAGE.MYPAGE_UPDATE}`, editedUserInfoData);
};

export const CheckRoutineIsSaved = async (routineId: string) => {
    return await instanceAuthenticated.get(`${EXERCISE.EXERCISE_ENROLLED}/${routineId}`);
};

export const LikePost = async (routineId: number | undefined) => {
    return await instanceAuthenticated.post(`${EXERCISE.EXERCISE}/${routineId}${EXERCISE.LIKES}`);
};

export const LikeDelete = async (routineId: number | undefined) => {
    return await instanceAuthenticated.delete(`${EXERCISE.EXERCISE}/${routineId}${EXERCISE.LIKES}`);
};
