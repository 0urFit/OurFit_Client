type LoginForm = {
    email: string;
    password: string;
};

type IsUserState = {
    checkUser: boolean;
    message: string;
};

export type { LoginForm, IsUserState };
