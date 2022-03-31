import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import userService from '../Services/userService'

export const getUser = createAsyncThunk(
    "getUser",
    async(token, thunkApi) => {
        const response = await userService.authenticateUser(token);
        console.log("response in thunk " + response.payload)
        return response;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: { token: undefined, user: undefined },
    reducers: {
        
    },
    extraReducers: (builder)=> {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }

})

export default userSlice;