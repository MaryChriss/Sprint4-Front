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

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, required = false, placeholder = "", textarea = false }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {textarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <input
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

export default Input;
