import { combineReducers, configureStore, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import appReducer from '../App/appSlice';
import multiStepFormReducer from '../App/Layout/MultiStepForm/multiStepFormSlice';
import { ThunkAction } from 'redux-thunk';

const rootReducer = combineReducers({
  app: appReducer,
  multiStepForm: multiStepFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = AppDispatch & ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunkAction<R> = ThunkAction<R, RootState, undefined, AnyAction>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;