import { createSlice } from '@reduxjs/toolkit';

export interface RoutineType {
    routineId: number;
    week: number;
    routineName: string;
    period: number;
    fewTime: number;
    category: string;
}

const initialState: RoutineType = {
    routineId: 0,
    week: 1,
    routineName: '',
    period: 0,
    fewTime: 0,
    category: '',
};

const routineSlice = createSlice({
    name: 'routine',
    initialState,
    reducers: {
        saveRoutineInfo: (state, action) => {
            const { routineId, week, routineName, period, fewTime, category } = action.payload;

            state.routineId = routineId;
            state.week = week;
            state.routineName = routineName;
            state.period = period;
            state.fewTime = fewTime;
            state.category = category;
        },
    },
});

export const { saveRoutineInfo } = routineSlice.actions;
export default routineSlice.reducer;
