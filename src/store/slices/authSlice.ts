import { createSlice } from '@reduxjs/toolkit';

export interface AuthTokenType {
    accessToken: string;
}

const initialState = {
    accessToken: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
