import React, { useState } from "react";
import { useRouter } from "next/router";
import FormLogin from "../FormLogin/FormLogin";
import FormCadastro from "../FormCadastro/FormCadastro";

const RightSection: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userData, setUserData] = useState<{ email: string; password: string } | null>(null);
    const router = useRouter();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (email: string, password: string) => {
        if (userData && userData.email === email && userData.password === password) {
        router.push("/");
        } else {
        alert("E-mail ou senha incorretos.");
        }
    };

    return (
        <div>
        <div>
            {isLogin ? (
            <FormLogin toggleForm={toggleForm} handleLogin={handleLogin} />
            ) : (
            <FormCadastro toggleForm={toggleForm} setUserData={setUserData} />
            )}
        </div>
        </div>
    );
};