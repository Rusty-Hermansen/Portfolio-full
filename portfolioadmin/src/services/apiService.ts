import axios from "axios";
import ClientConfig from "../Models/clientConfig";

const apiUrl= '/api';

const addConfig = async (config: ClientConfig): Promise<ClientConfig> => {
    const res = await axios.post<ClientConfig>(apiUrl +'/addConfig', config)
    return res.data;
}

const getStatus = async (): Promise<string> => {
    const res = await axios.get<string>(apiUrl + '/wgservice/status');
    return res.data;
}

const restartService = async() => {
    const res= await axios.get(apiUrl + 'wgservice/restart');
}

const apiService = {
    addConfig,
    getStatus,
    restartService
}

export default apiService;