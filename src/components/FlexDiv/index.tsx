import React from "react";

interface CardProps {
    className?: string;
    children: React.ReactNode;
}
function FlexDiv({ className = '', children }: CardProps): React.ReactElement {

    return (
        <div className={`${className} flex flex-col h-full justify-between bg-gray-light`}>
            {children}
        </div>
    );
}

export default FlexDiv;