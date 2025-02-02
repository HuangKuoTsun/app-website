// components/Button.tsx 
'use client'

import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            type="button"
            className=" relative px-3 py-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
            onClick={onClick}
        >
            {children}
        </button>
    );
};