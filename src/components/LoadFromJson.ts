// components/LoadFromJson.ts

import { promises as fs } from 'fs';

export interface JsonObject {
    Title: string;
    Image: string;
    Promotional: string;
    Description: string;
}

// FilePath: string = '/Application/Description.json'
export default async function JsonData( FilePath: string = '/Application/Description.json' ): Promise<JsonObject[]> {
    //const file = await fs.readFile(process.cwd() + FilePath, 'utf8');
    const file = await fs.readFile(FilePath, 'utf8');
    const data: JsonObject[] = JSON.parse(file);
    return data;
}