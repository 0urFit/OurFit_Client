export type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

export type UserInfoType = {
    name: string;
    value: string | number;
};

export type ProfileInfoEditType = {
    benchpress: string;
    deadlift: string;
    height: string;
    overheadpress: string;
    squat: string;
    weight: string;
    nickname: string;
};
