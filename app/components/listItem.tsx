import { ReactNode } from 'react';

interface ListItemProps {
    icon: ReactNode;
    text: string;
}

export default function ListItem({ icon, text }: ListItemProps) {
    return (
        <li className="flex items-center space-x-2">
            <div className="w-6 h-6 flex-shrink-0 mr-2">
                {icon}
            </div>
            <span>{text}</span>
        </li>
    );
}