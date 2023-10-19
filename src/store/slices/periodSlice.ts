import { createSlice } from '@reduxjs/toolkit';

export interface PeriodType {
    week: number;
}

const initialState: PeriodType = {
    week: 1,
};

const periodSlice = createSlice({
    name: 'period',
    initialState,
    reducers: {
        setWeek: (state, action) => {
            const week = action.payload;

            state.week = week;
        },
    },
});

export const { setWeek } = periodSlice.actions;
export default periodSlice.reducer;
