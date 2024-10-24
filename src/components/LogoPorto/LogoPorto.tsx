import Image from 'next/image';
import logo from '../../../public/Logo-Porto.png';

export const LogoPorto = () => {
    return (
        <div className='flex items-center'>
            <Image className='w-8 h-auto rounded-md' src={logo} alt="Logo Porto" />
            <h1 className='font-sans font-bold text-[#00a1fc] text-4xl mt-0 mb-0'>Porto</h1>
        </div>
    );
}
