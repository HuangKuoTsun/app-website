// components/JsonApplication.ts

import { FetchService } from './FetchService';

export interface JsonObject {
        Title: string;
        Image: string;
        Promotional: string;
        Description: string;
};

export class JsonApplication {

    const Service = new FetchService();

    const JsonPath: string = '/Application/Description.json';

    // GET request
    async function FetchJson( FilePath: string = JsonPath ): Promise<JsonObject[] | string> {
        try {
            const Data = await Service.Get<JsonObject[]>(FilePath);
            return Data;
        } catch (error) {
            console.error('An error occurred:', error);
            return ('An error occurred:' + String(error));
        };
    };
    
    // POST request
    async function SendJson( FilePath: string = JsonPath ): Promise<JsonObject[] | string> {
        try {
            const Data = await Service.Post<JsonObject[]>(FilePath, {
                key: 'value'
            });
            return Data;
        } catch (error) {
            console.error('An error occurred:', error);
            return ('An error occurred:' + String(error));
        };
    };

    // PUT request
    async function UpdateJson( FilePath: string = JsonPath ): Promise<JsonObject[] | string> {
        try {
            const Data = await Service.Put<JsonObject[]>(FilePath, {
                key: 'new-value'
            });
            return Data;
        } catch (error) {
            console.error('An error occurred:', error);
            return ('An error occurred:' + String(error));
        };
    };

    // DELETE request
    async function DeleteJson( FilePath: string = JsonPath ): Promise<JsonObject[] | string> {
        try {
            const Data = await fetchService.delete<JsonObject[]>(FilePath);
            return Data;
        } catch (error) {
            console.error('An error occurred:', error);
            return ('An error occurred:' + String(error));
        };
    };
};
