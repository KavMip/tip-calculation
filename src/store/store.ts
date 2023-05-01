import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from '../App/appSlice';

const rootReducer = combineReducers({
    app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
});

export default store;