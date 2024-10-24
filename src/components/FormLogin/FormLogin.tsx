import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa"; 
import { Botao } from "../Botao/Botao";
import Link from "next/link";
interface FormLoginProps {
    toggleForm: () => void;
    handleLogin: (email: string, password: string) => void;
    }

    export const FormLogin: React.FC<FormLoginProps> = ({ toggleForm, handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <>
        <h1 className="flex justify-center ml-0 mb-20 text-3xl mt-8">Login:</h1>

        <form onSubmit={handleSubmit}>
            <div className="relative w-full mb-4">
            <span className="absolute top-1/2 left-2.5 transform -translate-y-3/5 text-2xl bg-gray-400">
                <BiUser size="1.5rem" color="#00a1fc" />
            </span>
            <input className="w-full p-3.5 pl-10 mb-4 border border-gray-400 rounded-[4rem] text-base bg-white focus:border-blue-500 focus:outline-none"
                type="text"
                placeholder="     E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="relative w-full mb-4">
            <span className="absolute top-1/2 left-2.5 transform -translate-y-3/5 text-2xl bg-gray-400">
                <FaLock size="1.5rem" color="#00a1fc" />
            </span>
            <input className="w-full p-3.5 pl-10 mb-4 border border-gray-400 rounded-[4rem] text-base bg-white focus:border-blue-500 focus:outline-none"
                type="password"
                placeholder="      Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <div>
            <Botao type="submit">Entrar</Botao>
            </div>
        </form>

        <Link className="flex justify-center text-center mt-8 cursor-pointer text-blue-500 underline" onClick={toggleForm} href={""}>É novo aqui? Cadastre-se</Link>
        </>
    );
};
