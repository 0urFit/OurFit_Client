import { createSlice } from '@reduxjs/toolkit';

export interface AuthTokenType {
    accessToken: string;
    isLogin: boolean;
}

const initialState: AuthTokenType = {
    accessToken: '',
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            const { isLogin, accessToken } = action.payload;

            state.isLogin = isLogin;
            state.accessToken = accessToken;
        },
    },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
