import Link from "next/link";
import React, { useState } from "react";
import { Botao } from "../Botao/Botao";

interface FormCadastroProps {
    toggleForm: () => void;
    setUserData: (data: { email: string; password: string }) => void;
    }

    const FormCadastro: React.FC<FormCadastroProps> = ({ toggleForm, setUserData }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
        }

        if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
        }

        setUserData({ email, password });
        alert("Cadastro realizado com sucesso! Agora faça o login.");
        toggleForm();
    };

    return (
        <>
        <h1 className="flex justify-center ml-0 text-2xl mt-4">Cadastre-se:</h1>
        <form onSubmit={handleSubmit}>
            <input className="w-full p-3.5 pl-10 mb-4 border-gray-400 focus:outline-none border-blue-700"
            type="text" 
            placeholder="Nome Completo" 
            />

            <input className="w-full p-3.5 pl-10 mb-4 border-gray-400 focus:outline-none border-blue-700"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input className="w-full p-3.5 pl-10 mb-4 border-gray-400 focus:outline-none border-blue-700"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <input className="w-full p-3.5 pl-10 mb-4 border-gray-400 focus:outline-none border-blue-700"
            type="password"
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
            <Botao type="submit">Cadastrar</Botao>
        </form>

        <Link className="flex justify-center text-center mt-4 cursor-pointer bg-blue-700 underline mt-8" onClick={toggleForm} href={""}>
            Já tem uma conta? Login
        </Link>
        </>
    );
};
