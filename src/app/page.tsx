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
    <div className="flex flex-col items-center gap-20 mt-8">
      {PageData.map((product: JsonObject, index: number) => (
        <div key={index}>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className=" flex-shrink mx-4 text-gray-700">{product.Classification}</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          <figure className="flex justify-between right-4 left-4 gap-8">
            <Image className="object-contain"
              src={product.Image}
              alt="Product-Image"
              width={220}
              height={478}
              layout="fixed"
              priority
            />
            <figcaption className="flex flex-col gap-8">
              <blockquote className="break-words text-white"> {product.Title} </blockquote>
              <blockquote className="break-words text-white">
                {product.Promotional.map((element: string, index: number) => (
                  <div key={index}>{element}</div>
                ))}
              </blockquote>
              <blockquote className="break-words text-white">
                {product.Description.map((element: string, index: number) => (
                  <div key={index}>{element}</div>
                ))}
              </blockquote>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
