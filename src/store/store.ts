import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from '../App/appSlice';
import multiStepFormReducer from '../App/Layout/MultiStepForm/multiStepFormSlice'

const rootReducer = combineReducers({
    app: appReducer,
    multiStepForm: multiStepFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;