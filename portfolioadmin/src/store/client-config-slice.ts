import { createAsyncThunk } from "@reduxjs/toolkit";
import ClientConfig from "../Models/clientConfig";
import clientConfig from "../Models/clientConfig";

interfaceClientConfigState {
    configs: ClientConfig[];
}

const initialState = {
    configs: [];
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