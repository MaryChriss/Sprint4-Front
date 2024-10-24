import React from "react";

interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    placeholder?: string;
    textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, required = false, placeholder = "", textarea = false }) => {
    return (
        <div className="mt-4">
            <label className="flex mb-1 mt-7 font-bold justify-center text-lg" htmlFor={name}>{label}</label>
            {textarea ? (
                <textarea className="w-96 h-60 rounded-3x2 p-2 focus:border-blue-500 focus:outline-none"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <input className="w-96 rounded-3x2 border border-black text-base p-2 focus:border-blue-500 focus:outline-none"
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

