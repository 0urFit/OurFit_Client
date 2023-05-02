type LoginForm = {
    email: string;
    password: string;
};

type IsUserState = {
    isUser: boolean;
    message: string;
};

export type { LoginForm, IsUserState };
