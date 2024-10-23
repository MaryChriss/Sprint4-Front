import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa"; 
import { Botao } from "../Botao/Botao";
import Link from "next/link";
interface FormLoginProps {
    toggleForm: () => void;
    handleLogin: (email: string, password: string) => void;
    }

    const FormLogin: React.FC<FormLoginProps> = ({ toggleForm, handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return (
        <>
        <h1>Login:</h1>

        <form onSubmit={handleSubmit}>
            <div>
            <span>
                <BiUser size="1.5rem" color="#00a1fc" />
            </span>
            <input
                type="text"
                placeholder="     E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div>
            <span>
                <FaLock size="1.5rem" color="#00a1fc" />
            </span>
            <input
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

        <Link onClick={toggleForm} href={""}>É novo aqui? Cadastre-se</Link>
        </>
    );
};

export default FormLogin;
