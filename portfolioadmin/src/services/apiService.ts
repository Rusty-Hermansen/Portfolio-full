import axios from "axios";
import ClientConfig from "../Models/clientConfig";

const apiUrl= '/api';

const addConfig = async (config: ClientConfig): Promise<ClientConfig> => {
    const res = await axios.post<ClientConfig>(apiUrl +'/addConfig', config)
    return res.data;
}

const apiService = {
    addConfig
}

export default apiService;