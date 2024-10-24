import { BiGroup, BiHome, BiUserCircle } from "react-icons/bi"
import { LogoPorto } from "../LogoPorto/LogoPorto"
import { BsTelephone } from "react-icons/bs"
import { LuUserSquare2 } from "react-icons/lu"
import Link from "next/link"

export const Header =() => {
    return (
        <>
        <div className="flex items-center justify-between h-16 bg-gray-50 shadow-[10px_10px_30px_rgba(0,0,0,0.06)]">

            <LogoPorto />

                <nav className="flex mr-20">
                    <ul className="list-none flex gap-8 w-full">

                        <li className="w-20 h-16 ml-0 flex items-center justify-center mt-3">
                            <BiHome size="1.5rem" color="#00a1fc" />
                            <Link className="no-underline text-black font-bold hover:text-blue-600" href="/">Home</Link>
                        </li>

                        <li className="w-20 h-16 ml-0 flex items-center justify-center mt-3">
                            <BiGroup size="1.5rem" color="#00a1fc" />
                            <Link className="no-underline text-black font-bold hover:text-blue-600" href="/equipe">Equipe</Link>
                        </li>

                        <li className="w-20 h-16 ml-0 flex items-center justify-center mt-3">
                            <BsTelephone size="1.2rem" color="#00a1fc" />
                            <Link className="no-underline text-black font-bold hover:text-blue-600" href="/contato">Contato</Link>
                        </li>

                        <li className="w-20 h-16 ml-0 flex items-center justify-center mt-3">
                            <LuUserSquare2 size="1.5rem" color="#00a1fc" />
                            <Link className="no-underline text-black font-bold hover:text-blue-600" href="/perfil">Perfil</Link>
                        </li>
                        
                    </ul>
                </nav>

                <div className="flex items-center flex-row mr-5">
                    <BiUserCircle size="1.5rem" color="#00a1fc" />
                    <Link className="no-underline text-black font-bold hover:text-blue-600" href="/login">Login</Link>
                </div>

        </div>
        </>
    )
}