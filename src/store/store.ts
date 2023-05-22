import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import authSlice from './slices/authSlice';

const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }

    return combineReducers({
        auth: authSlice,
    })(state, action);
};

const makeStore = () =>
    configureStore({
        reducer,
    });

const store = makeStore();

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
