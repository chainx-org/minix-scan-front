import React from "react";

interface ListItemProps {
    className?: string;
    children?: React.ReactNode;
    title: string;
    content: React.ReactNode;
    blueColor: boolean;
}
function ListItem({className = '', children, title, content, blueColor }:ListItemProps): React.ReactElement {

  return (
    <div className={`${className} grid grid-cols-listItem w-full py-4.5 last:border-0 border-b border-listItem text-xs`}>
        <div className='text-black-darker font-semibold'>{title}</div>
        <div className={`${blueColor ? 'text-blue-light' : 'text-black-dark'} font-normal`}>
            {content}
        </div>
    </div>
  );
}

export default ListItem;
