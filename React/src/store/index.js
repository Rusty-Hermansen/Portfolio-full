import { configureStore } from '@reactjs/toolkit';
import userSlice from './userSlice';

export default configureStore({
    reducers: { user: userSlice.reducer }
})