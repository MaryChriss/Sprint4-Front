import { IconType } from "react-icons";

interface BotaoRedeSocialProps {
    Icon: IconType; 
    url: string; 
    label: string; 
    iconSize?: string | number;
}

export const BotaoRedeSocial = ({ Icon, url, label,  iconSize = '2rem' }: BotaoRedeSocialProps)  => (
    <div className="flex bg-slate-50 rounded-2xl border-gray-400 p-2 h-12 w-32 items-center justify-center">
    <a className="text-xl font-bold text-black flex items-center" href={url} target="_blank" rel="noopener noreferrer">
        <Icon size={iconSize} />
        {label}
    </a>
    </div>
);
