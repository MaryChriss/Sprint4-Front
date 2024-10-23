import { IconType } from "react-icons";

interface BotaoRedeSocialProps {
    Icon: IconType; 
    url: string; 
    label: string; 
    iconSize?: string | number;
}

export const BotaoRedeSocial = ({ Icon, url, label,  iconSize = '2rem' }: BotaoRedeSocialProps)  => (
    <div>
    <a href={url} target="_blank" rel="noopener noreferrer">
        <Icon size={iconSize} />
        {label}
    </a>
    </div>
);
