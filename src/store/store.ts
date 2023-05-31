/* eslint-disable indent */

import { configureStore, Reducer, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import authSlice, { AuthTokenType } from './slices/authSlice';
import savedRoutineSlice, { SavedRoutineType } from './slices/savedRoutineSlice';

export interface ReducerStates {
    auth: AuthTokenType;
    save: SavedRoutineType;
}

const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };

        default: {
            const combinedReducer = combineReducers({
                auth: authSlice.reducer,
                save: savedRoutineSlice.reducer,
            });
            return combinedReducer(state, action);
        }
    }
};

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
        devTools: process.env.NODE_ENV === 'development',
    });

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

const wrapper = createWrapper<AppStore>(makeStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
