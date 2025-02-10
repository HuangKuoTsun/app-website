// components/JsonApplication.ts

import { FetchService } from './FetchService';

export interface JsonObject {
        Title: string;
        Image: string;
        Promotional: string;
        Description: string;
};
export class JsonApplication {

    private Service = new FetchService();

    private JsonPath: string;

    constructor(JsonPath: string = '/Application/Description.json') {
        this.JsonPath = JsonPath;
    }

    // GET request
    public async FetchJson(): Promise<JsonObject[]> {
        const Data = await this.Service.Get<JsonObject[]>(this.JsonPath);
        return Data;
    };
    
    // POST request
    public async SendJson(Body: JsonObject[]): Promise<JsonObject[]> {
        const Data = await this.Service.Post<JsonObject[]>(this.JsonPath, Body);
        return Data;
    };

    // PUT request
    public async UpdateJson(Body: JsonObject[]): Promise<JsonObject[]> {
        const Data = await this.Service.Put<JsonObject[]>(this.JsonPath, Body);
        return Data;
    };

    // DELETE request
    public async DeleteJson(): Promise<JsonObject[]> {
        const Data = await this.Service.Delete<JsonObject[]>(this.JsonPath);
        return Data;
    };
};
