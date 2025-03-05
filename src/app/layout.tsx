import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SuggestionButton from "@/components/SuggestionButton";
import PrivacyPolicyButton from "@/components/PrivacyPolicyButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Intoxicated-Child Studio",
  description:
    "Introduction to the application developed by the studio. And introduction to high-mountain tea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Intoxicated-Child Studio</title>
      </head>
      <body
        className={
          geistSans.variable +
          geistMono.variable +
          "antialiased" +
          "min-h-screen py-4  bg-black overflow-x-scroll mx-4"
        }
      >
        <header className="bg-transparent flex justify-between items-center sticky top-4 right-4 left-4 z-50 w-[848px]">
          <div className="text-2xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-green-400 to-blue-400">
            Intoxicated-Child Studio
          </div>
          <div className="grid items-start justify-center gap-8">
            <div className=" relative group">
              <div
                className=" absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg 
                blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
              ></div>
              <SuggestionButton />
            </div>
          </div>
        </header>
        <div className="z-0 w-[880px]">{children}</div>
        <footer className="bg-transparent flex justify-start sticky bottom-4 left-4 z-1">
          <div className="grid items-start justify-center gap-8">
            <div className="relative group">
              <PrivacyPolicyButton PrivacyPolicyName="Website" />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
