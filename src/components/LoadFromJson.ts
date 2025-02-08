// components/LoadFromJson.ts

import { promises as fs } from 'fs';

export interface JsonObject {
    Title: string;
    Image: string;
    Promotional: string;
    Description: string;
}

// FilePath: string = '/JSON/AppDescription.json'
export default async function JsonData( FilePath: string = '/JSON/AppDescription.json' ): Promise<JsonObject[]> {
    const file = await fs.readFile(process.cwd() + FilePath, 'utf8');
    const data: JsonObject[] = JSON.parse(file);
    return data;
}