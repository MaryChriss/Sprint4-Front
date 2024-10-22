import { IconType } from "react-icons";

interface BotaoRedeSocialProps {
    Icone: IconType; 
    url: string; 
    label: string; 
    iconSize?: string | number;
}

export const BotaoRedeSocial = ({ Icone, url, label,  iconSize = '2rem' }: BotaoRedeSocialProps)  => (
    <div>
    <a href={url} target="_blank" rel="noopener noreferrer">
        <Icone size={iconSize} />
        {label}
    </a>
    </div>
);
