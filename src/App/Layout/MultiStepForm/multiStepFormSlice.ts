import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { MultiStepFormType } from '../../../interfaces/multiStepForm/multiStepFormTypes';
import { AppThunkAction } from '../../../store/store';

interface AppState {
  step: number;
  formData: MultiStepFormType | null;
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: AppState = {
  step: 1,
  formData: null,
  isSubmitting: false,
  isSuccess: false,
  isError: false,
};

const multiStepFormSlice = createSlice({
  name: 'multiStepForm',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    addFormData(state, action: PayloadAction<MultiStepFormType>) {
      state.formData = action.payload;
    },
    submitFormStart(state) {
      state.isSubmitting = true;
      state.isSuccess = false;
      state.isError = false;
    },
    submitFormSuccess(state) {
      state.isSubmitting = false;
      state.isSuccess = true;
      state.isError = false;
    },
    submitFormFailure(state) {
      state.isSubmitting = false;
      state.isSuccess = false;
      state.isError = true;
    },
  },
});

export const {
  setStep,
  addFormData,
  submitFormStart,
  submitFormSuccess,
  submitFormFailure,
} = multiStepFormSlice.actions;

export const submitForm = (): AppThunkAction<void> => {
  return async (dispatch, getState) => {
    try {
      dispatch(submitFormStart());

      const formData = getState().multiStepForm.formData;
      const randomUrl = 'https://example.com/random';
      
      const response = await axios.post(randomUrl, formData);

      if (response.status === 200) {
        dispatch(submitFormSuccess());
      } else {
        dispatch(submitFormFailure());
      }
    } catch (error) {
      dispatch(submitFormFailure());
    }
  };
};

export default multiStepFormSlice.reducer;