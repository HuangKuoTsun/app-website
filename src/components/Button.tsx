// components/Button.tsx
'use client'
export default function Button({ children, onClick }) {
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