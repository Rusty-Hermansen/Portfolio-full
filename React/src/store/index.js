import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
    reducers: { user: userSlice.reducer }
})