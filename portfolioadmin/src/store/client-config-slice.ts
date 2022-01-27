import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ClientConfig from "../Models/clientConfig";
import clientConfig from "../Models/clientConfig";
import apiService from "../services/apiService";

interface ClientConfigState {
    configs: ClientConfig[];
    wg_status: string;
}

const initialState: ClientConfigState = {

    configs: [],
    wg_status: "inactive"
}

export const addConfig = createAsyncThunk(
  'addConfig',
   async(config: ClientConfig, thunkApi): Promise<ClientConfig> => {
        return await apiService.addConfig(config);
  }
    )

const clientConfigSlice = createSlice({
    name: 'client-config',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) =>{
        builder.addCase(addConfig.fulfilled, (state, action: PayloadAction<ClientConfig>) => {
            state.configs.push(action.payload);
        })
    }
})

export default clientConfigSlice;