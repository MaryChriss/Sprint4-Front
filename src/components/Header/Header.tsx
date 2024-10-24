import { BiGroup, BiHome, BiUserCircle } from "react-icons/bi"
import { LogoPorto } from "../LogoPorto/LogoPorto"
import { BsTelephone } from "react-icons/bs"
import { LuUserSquare2 } from "react-icons/lu"
import Link from "next/link"

export const Header =() => {
    return (
        <>
        <div>

            <LogoPorto />

                <nav>
                    <ul>

                        <li>
                            <BiHome size="1.5rem" color="#00a1fc" />
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <BiGroup size="1.5rem" color="#00a1fc" />
                            <Link href="/equipe">Equipe</Link>
                        </li>

                        <li>
                            <BsTelephone size="1.2rem" color="#00a1fc" />
                            <Link href="/contato">Contato</Link>
                        </li>

                        <li>
                            <LuUserSquare2 size="1.5rem" color="#00a1fc" />
                            <Link href="/perfil">Perfil</Link>
                        </li>
                        
                    </ul>
                </nav>

                <div>
                    <BiUserCircle size="1.5rem" color="#00a1fc" />
                    <Link href="/login">Login</Link>
                </div>

        </div>
        </>
    )
}