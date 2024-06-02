import { CONFIG } from '@bubblegum/constants';
import axios, { type AxiosInstance } from 'axios';

export type Method = 'GET' | 'POST' | 'PUT';

export default class Client {

    private readonly _instance: AxiosInstance;

    constructor() {
        this._instance = axios.create({
            baseURL: CONFIG.baseURL,
            headers: {
                'x-hydra-user-agent': CONFIG.userAgent,
                'Content-Type': 'application/json',
                'x-hydra-api-key': CONFIG.apiKey,
                'x-hydra-access-token': Bun.env.TOKEN
            }
        })
    }

    protected async client(method: Method = 'GET', url: string, data: any = {}): Promise<any> {
        try {
            return await this._instance({ method, url, data });
        } catch (e: any) {
            console.log(e.response.data)
        }
    }
}