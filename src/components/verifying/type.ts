interface VerifyingPagePropsType {
    accessToken: string;
    refreshToken: string;
    success: boolean;
    userInfo: {
        userEmail: string;
        userGender: string | null;
    };
}
export type { VerifyingPagePropsType };
