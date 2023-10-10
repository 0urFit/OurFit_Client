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
