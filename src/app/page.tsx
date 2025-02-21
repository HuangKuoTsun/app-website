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
    <div className="flex flex-col gap-20 mt-8 overflow-x-scroll">
      {PageData.map((product: JsonObject, index: number) => (
        <li className="flex justify-between right-4 left-4 gap-8" key={index}>
          <div className="min-w-[220px]">
            <Image className="dark:invert"
              src={product.Image}
              alt="Product-Image"
              width={220}
              height={478}
              layout="fixed"
              priority
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="break-words text-white"> { product.Title } </div>
            <div className="break-words text-white">
              {product.Promotional.map((element: string, index: number) => (
              <div key={index}>{element}</div>
              ))}
            </div>
            <div className="break-words text-white">
              {product.Description.map((element: string, index: number) => (
              <div key={index}>{element}</div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
