// components/FetchService.ts

export class FetchService {

    // GET Request : Fetch Data
    async Get<T>(URL: string): Promise<T> {
        const Response = await fetch(URL);
        if (!Response.ok) {
            throw new Error(Response.statusText);
        }
        const Data: T = await Response.json();
        return Data;
    };
    
    // POST Request : Send Data
    async Post<T>(URL: string, Body: T): Promise<T> {
        const Response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Body)
        });
        if (!Response.ok) {
            throw new Error(Response.statusText);
        }
        const Data: T = await Response.json();
        return Data;
    };

    // PUT Request : Update Data
    async Put<T>(URL: string, Body: T): Promise<T> {
        const Response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Body)
        });
        if (!Response.ok) {
            throw new Error(Response.statusText);
        }
        const Data: T = await Response.json();
        return Data;
    };
    
    // DELETE Request : Delete Data
    async Delete<T>(URL: string): Promise<T> {
        const Response = await fetch(URL, {
            method: 'DELETE'
        });
        if (!Response.ok) {
            throw new Error(Response.statusText);
        }
        const data: T = await Response.json();
        return data;
    };

};