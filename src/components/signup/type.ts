type ItemType = {
    id: number;
    inputType: string;
    inputValue: InputValue;
    inputTitle: string;
    explanation: string;
    essential: boolean | string;
    minLength?: number;
    minLengthMessage?: string;
    pattern?: RegExp;
    patternMessage?: string;
};

type InputType = {
    email: string;
    password: string;
    passwordCheck: string;
    nickname: string;
    gender: boolean | undefined;
    height: number;
    weight: number;
    squat: number;
    benchpress: number;
    deadlift: number;
    overheadpress: number;
};

type InputValue = 'email' | 'password' | 'passwordCheck' | 'nickname' | 'gender' | 'height' | 'weight' | 'squat' | 'benchpress' | 'deadlift' | 'overheadpress';

type StatusType = { email: boolean; nickname: boolean };

type AgreeType = { id: number; content: string; essential: boolean };

type errorType = {
    response: responseType;
};

type responseType = {
    data: dataType;
};

type dataType = {
    code: number;
    message: string;
    success: boolean;
};

export type { ItemType, InputType, InputValue, StatusType, AgreeType, errorType };
