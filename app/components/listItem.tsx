import { ReactNode } from "react";

interface ListItemProps {
  icon: ReactNode;
  text: string;
}

export default function ListItem({ icon, text }: ListItemProps) {
  return (
    <li className="flex items-center space-x-2 p-1">
      <div className="w-15 h-15 flex-shrink-0 mr-2">{icon}</div>
      <span className="text-[17px] font-thin">{text}</span>
    </li>
  );
}
