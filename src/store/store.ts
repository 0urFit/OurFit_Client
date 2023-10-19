import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';
import periodSlice from './slices/periodSlice';
import routineSlice from './slices/routineSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        period: periodSlice,
        routine: routineSlice,
        user: userSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
