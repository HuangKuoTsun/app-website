// components/PrivacyPolicyButton.tsx
'use client'

import { SyntheticEvent } from "react";
import Button from "./Button";

interface ButtonProps {
    PrivacyPolicyName: string;
}

const PrivacyPolicyToLink = (event: SyntheticEvent) => {
  event.preventDefault();
    const LinkTo: string = '/PrivacyPolicy';
  window.location.href = LinkTo;
};

export default function PrivacyPolicyButton({ PrivacyPolicyName }: ButtonProps) {
    return (
        <Button onClick={PrivacyPolicyToLink}>
            <span className="text-base font-mono pr-3 text-gray-100">
                {PrivacyPolicyName}
            </span>
            <span className="text-base font-mono pl-3 text-indigo-400 transition duration-200 group-hover:text-gray-100">
                Privacy-Policy
            </span>
        </Button>
    );
};