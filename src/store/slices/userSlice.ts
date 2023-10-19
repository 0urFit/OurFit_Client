import { createSlice } from '@reduxjs/toolkit';

export interface UserInfoType {
    userEmail: string;
    userGender: string;
}

const initialState: UserInfoType = {
    userEmail: '',
    userGender: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUserInfo: (state, action) => {
            const { userEmail, userGender } = action.payload;
            state.userEmail = userEmail;
            state.userGender = userGender;
        },
    },
});

export const { saveUserInfo } = userSlice.actions;
export default userSlice.reducer;
