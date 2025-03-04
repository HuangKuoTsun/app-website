// components/PrivacyPolicyButton.tsx

import Link from "next/link";
interface ButtonProps {
  PrivacyPolicyName: string;
}

export default function PrivacyPolicyButton({
  PrivacyPolicyName,
}: ButtonProps) {
  return (
    <Link href="/WebsitePrivacyPolicy.html">
      <span className="text-base font-mono pl-3 text-indigo-400 transition duration-200 group-hover:text-gray-100">
        {PrivacyPolicyName + ":Privacy-Policy"}
      </span>
    </Link>
  );
}
