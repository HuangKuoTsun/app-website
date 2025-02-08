// components/LoadFromJson.ts

import { promises as fs } from 'fs';

export interface JsonObject {
    Title: string;
    Image: string;
    Promotional: string;
    Description: string;
}

// FilePath: string = '../public/JSON/AppDescription.json'
export default async function JsonData( FilePath: string ): Promise<JsonObject[]> {
    const file = await fs.readFile(process.cwd() + FilePath, 'utf8');
    const data: JsonObject[] = JSON.parse(file);
    return data;
}