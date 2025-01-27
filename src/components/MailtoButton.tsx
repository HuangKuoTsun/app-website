// components/MailtoButton.tsx
'use client'
import { SyntheticEvent } from "react";
import Button from "./Button";

const MailtoLink = (event: SyntheticEvent) => {
  event.preventDefault();
    const email: string = "kuotsun.huang@gmail.com";
    const subject: string = "Please give me (some) feedback.";
    const body: string = "这是邮件正文。";
  const mailto = 'mailto: ${ email }?subject=${ subject }&body=${ body }';
  window.location.href = mailto;
};

export default function MailtoButton() {
    return (
        <Button onClick={MailtoLink}>
            <span className="text-base font-mono pr-3 text-gray-100">
                Please give me (some) feedback.
            </span>
            <span className="text-base font-mono pl-3 text-indigo-400 transition duration-200 group-hover:text-gray-100">
                意見回饋
            </span>
        </Button>
    );
};