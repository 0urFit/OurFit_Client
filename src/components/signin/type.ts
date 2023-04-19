export type ItemType = {
    id: number;
    inputType: string;
    inputValue: InputValue;
    inputTitle: string;
    explanation: string;
    essential: boolean;
};

export type InputType = {
    email: string;
    password: string;
    passwordCheck: string;
    nickname: string;
    gender: boolean;
    height: number;
    weight: number;
    squat: number;
    benchpress: number;
    deadlift: number;
    overheadPress: number;
};

export type InputValue = 'email' | 'password' | 'passwordCheck' | 'nickname' | 'gender' | 'height' | 'weight' | 'squat' | 'benchpress' | 'deadlift' | 'overheadPress';
