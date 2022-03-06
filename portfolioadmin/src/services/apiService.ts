import axios from "axios";
import ClientConfig from "../Models/clientConfig";
import fileDownload from "js-file-download";
import keyModel from "../../../Models/keyModel";

const apiUrl= '/api';

const addConfig = async (config: ClientConfig): Promise<Blob> => {
    const res = await axios.post<Blob>(apiUrl +'/addConfig', {name: config.name.name, ipAddress: config.ipAddress.ipAddress, dateAdded: config.dateAdded}, {responseType: 'blob'});
    fileDownload(res.data, 'vpnconfig.conf')
    return res.data;
}

const getConfigByName =  async (): Promise<ClientConfig> => {
    const res = await axios.get<ClientConfig>(apiUrl)
    return res.data;
}

const getStatus = async (): Promise<string> => {
    const res = await axios.get<string>(apiUrl + '/wgservice/status');
    return res.data;
}

const restartService = async() => {
    const res= await axios.get(apiUrl + '/wgservice/restart');
}

const getPeers = async(): Promise<string[]> => {
    const res = await axios.get<string[]>(apiUrl + '/wgservice/peers');
    return res.data;
}
const removePeer = async(publicKey: keyModel) =>{
    await axios.post(apiUrl + '/wgservice/removeconfig', {publicKey: publicKey.key})
}

const apiService = {
    addConfig,
    getConfigByName,
    getStatus,
    restartService,
    getPeers,
    removePeer
    
}

export default apiService;