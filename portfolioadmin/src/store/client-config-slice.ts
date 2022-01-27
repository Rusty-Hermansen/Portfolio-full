import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ClientConfig from "../Models/clientConfig";
import clientConfig from "../Models/clientConfig";

interface ClientConfigState {
    configs: ClientConfig[];
}

const initialState = {
    configs: []
}

// export const addConfig = createAsyncThunk(
//   'addConfig', asyc(config: ClientConfig, thunkApi): Promis<ClientConfig[]> => {

//   }
//     )

const clientConfigStore = createSlice({
    name: 'client-config',
    initialState,
    reducers: {
        
    },
    extraReducers: {

    }
})