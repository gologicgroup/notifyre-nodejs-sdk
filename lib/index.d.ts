import { ContactsService, FaxService, SmsService } from './services';
export declare class NotifyreAPI {
    readonly apiKey: string;
    private version;
    private handleResponse;
    private handleError;
    private httpClient;
    constructor(apiKey: string, version?: string, handleResponse?: (res: import("axios").AxiosResponse<any, any>) => any, handleError?: (res: import("axios").AxiosError<any, any>) => Promise<never>);
    getFaxService(): FaxService;
    getSmsService(): SmsService;
    getContactsService(): ContactsService;
}
export * from './constants';
export * from './models';
export * from './types';
export { verifySignature } from './utilities';
