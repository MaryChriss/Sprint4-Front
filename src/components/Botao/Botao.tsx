import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
}

export const Botao: React.FC<ButtonProps> = ({ children, href= '', className = '', ...props }) => {
    const baseStyles = `w-1/2 p-3 bg-blue-500 text-white rounded-full cursor-pointer text-base ml-32`;

    if (href) {
        return (
            <Link href={href} passHref>
                <button className={baseStyles} {...props}>
                    {children}
                </button>
            </Link>
        );
    }


    return (
        <button className={baseStyles} {...props}>
            {children}
        </button>
    );
};