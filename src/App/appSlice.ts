import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    location: string;
}

const initialState: AppState = {
    location: '',
};

const appSlice = createSlice({
    name: 'appSettings',
    initialState,
    reducers: {
        setLocation(state, action: PayloadAction<string>) {
            state.location = action.payload;
        },
    },
});

export const { setLocation } = appSlice.actions;
export default appSlice.reducer;

