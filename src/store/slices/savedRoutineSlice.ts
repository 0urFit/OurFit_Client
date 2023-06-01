import { createSlice } from '@reduxjs/toolkit';

export interface SavedRoutineType {
    savedRoutine: object[];
}

const initialState: SavedRoutineType = {
    savedRoutine: [],
};

const savedRoutineSlice = createSlice({
    name: 'savedRoutine',
    initialState,
    reducers: {
        saveRoutine: (state, action) => {
            state.savedRoutine.push(action.payload);
        },
    },
});

export const { saveRoutine } = savedRoutineSlice.actions;
export default savedRoutineSlice;
