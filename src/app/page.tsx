import Image from "next/image";

import { AccessLocalJson, JsonObject } from "@/components/AccessLocalJson";
import { headers } from 'next/headers';
//import Script from "next/script";

export default async function Home() {

  const headerData = headers();
  const host = (await headerData).get('host');
  const protocol = (await headerData).get('x-forwarded-proto') ?? host?.startsWith('localhost') ? 'http' : 'https';
  const BaseURL = protocol + '://' + host;
  const JsonData = new AccessLocalJson(BaseURL);
  const PageData: JsonObject[] = await JsonData.FetchJson();

  //const nonce = (await headerData).get('x-nonce');
  
  return (
    <div className="flex flex-col gap-20 mt-32 mx-8">
      {PageData.map((product) => (
        <li className="flex justify-around gap-8" key={product.Title}>
          <Image className="dark:invert"
            src={product.Image}
            alt="Product-Image"
            width={330}
            height={717}
            layout="fixed"
            priority
          />
          <div className="flex flex-col gap-8">
            <div className="break-words"> {product.Title} </div>
            <div className="break-words" style={{ whiteSpace: 'pre-line' }}> {product.Promotional.split('\n').map(line => (<p>{ line }</p>))} </div>
            <div className="break-words" style={{ whiteSpace: 'pre-line' }}> {product.Description.split('\n').map(line => (<p>{ line }</p>))} </div>
          </div>
        </li>
      ))}
    </div>
  );
}
