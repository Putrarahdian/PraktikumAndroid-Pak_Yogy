import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import ApiManager from "./apiManager";

export const GetUsers = (async() => {
    const config : AxiosRequestConfig = {
        method: 'GET',
        headers: {
            'content-type' : 'application/json',
        } as RawAxiosRequestHeaders,
    };
    try {
        const response : AxiosResponse = await ApiManager.get('/users?page=1', config);
        return response;
    } catch (err) {
        console.log(err);
    }
})();