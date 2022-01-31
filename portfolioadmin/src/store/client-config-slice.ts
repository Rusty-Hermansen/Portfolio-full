import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { stat } from "fs";
import { Client } from "pg";
import ClientConfig from "../Models/clientConfig";

import apiService from "../services/apiService";

interface ClientConfigState {
    configs: ClientConfig[];
    peers: string[];
    wg_status: string;
}

const initialState: ClientConfigState = {

    configs: [],
    peers: [],
    wg_status: "inactive"
}

export const addConfig = createAsyncThunk(
  'addConfig',
   async(config: ClientConfig, thunkApi): Promise<Blob> => {
        return await apiService.addConfig(config);
  }
    )

export const getAllConfigs = createAsyncThunk(
    'getAllConfigs',
    async(params, thunkApi): Promise<ClientConfig> => {
        return await apiService.getConfigByName();
    }
)

export const getStatus = createAsyncThunk(
    'getStatus',
    async(params, thunkApi): Promise<string> => {
        return await apiService.getStatus();
    }
)

export const restartService = createAsyncThunk(
    'restartService',
    async (params, thunkApi): Promise<string> =>{
        await apiService.restartService();
        return await apiService.getStatus();
    }
)
export const getPeers = createAsyncThunk(
    'getPeers',
    async(params, thunkApi): Promise<string[]>=>{
        return await apiService.getPeers();
    }
)
export const removePeer = createAsyncThunk(
    'removePeer', 
    async(peerPublicKey: string, thunkApi)=>{
        await apiService.removePeer(peerPublicKey)
    }
)

const clientConfigSlice = createSlice({
    name: 'client-config',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) =>{
        builder
        .addCase(addConfig.fulfilled, (state, action: PayloadAction<Blob>) => {
            state.configs.push(action.payload);
        })
        .addCase(getPeers.fulfilled, (state, action: PayloadAction<string[]>)=>{
            state.peers = action.payload;
        })
        .addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
            state.wg_status = action.payload;
        })
        .addCase(restartService.fulfilled, (state, action: PayloadAction<string>) => {
            state.wg_status=action.payload;
        })
    }
})

export default clientConfigSlice;