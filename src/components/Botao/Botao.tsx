import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    customStyle?: string; 
}

export const Botao: React.FC<ButtonProps> = ({ children, href, customStyle, ...props }) => {

    if (href) {
        return (
            <Link href={href} passHref>
                <button {...props}>
                    {children}
                </button>
            </Link>
        );
    }


    return (
        <button {...props}>
            {children}
        </button>
    );
};
