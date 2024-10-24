import Image from 'next/image';
import logo from '../../../public/Logo-Porto.png';

export const LogoPorto = () => {
    return (
        <div>
            <Image src={logo} alt="Logo Porto" />
            <h1>Porto</h1>
        </div>
    );
}
