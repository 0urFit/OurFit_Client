export type ServiceErrorMessage = {
    message: string;
    result: {
        email: string;
        gender: string;
    };
};

export type LoginApiType = {
    email: string;
    password: string;
};

export type GetRoutineType = {
    id: number;
    imgpath: string;
    period: number;
    liked: boolean;
    enrolled: boolean;
    fewTime: number;
    routineName: string;
    category: string;
};

export type GetRoutineOverviewType = {
    routineName: string;
    level: number;
    weeks: number;
    period: number;
    isenrolled: boolean;
    isliked: boolean;
};

export type GetRoutineDetailInformationType = {
    day: string;
    exercises: [];
};
