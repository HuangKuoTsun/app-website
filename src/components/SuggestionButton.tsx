// components/SuggestionButton.tsx
'use client'

import { SyntheticEvent } from "react";
import Button from "./Button";

const MailtoLink = (event: SyntheticEvent) => {
  event.preventDefault();
    const email: string = "service001@cat-coding.com";
    const subject: string = "Customer recommendation from Intoxicated-Child-Studio";
    const body: string = "Guest Recommendations : ";
    const mailto: string = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  window.location.href = mailto;
};

export default function SuggestionButton() {
    return (
        <Button onClick={MailtoLink}>
            <span className="text-base font-mono pr-3 text-gray-100">
                Suggestion
            </span>
            <span className="text-base font-mono pl-3 text-indigo-400 transition duration-200 group-hover:text-gray-100">
                回饋意見
            </span>
        </Button>
    );
};