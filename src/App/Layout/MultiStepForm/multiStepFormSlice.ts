import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    step: number;
}

const initialState: AppState = {
    step: 3,
};

const multiStepFormSlice = createSlice({
    name: 'multiStepForm',
    initialState,
    reducers: {
        setStep(state, action: PayloadAction<number>) {
            state.step = action.payload;
        },
    },
});

export const { setStep } = multiStepFormSlice.actions;
export default multiStepFormSlice.reducer;

