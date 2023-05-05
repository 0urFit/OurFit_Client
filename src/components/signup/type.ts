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

type ErrorType = {
    response: ResponseType;
};

type ResponseType = {
    data: DataType;
};

type DataType = {
    code: number;
    message: string;
    success: boolean;
};

type SelectType = {
    value: string;
    label: string;
}

export type { ItemType, InputType, InputValue, StatusType, AgreeType, ErrorType, SelectType };
