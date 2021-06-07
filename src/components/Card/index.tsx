import React from "react";

interface CardProps {
    className?: string;
    children?: React.ReactNode;
}
function Card({className = '', children }:CardProps): React.ReactElement {

  return (
      <div className={`${className} w-full h-175 px-5 pb-4 bg-white-light shadow-card border border-card rounded-card`}>
        {children}
      </div>
  );
}

export default Card;
