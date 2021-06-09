import React from "react";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
}
function Card({className = '', children, title }:CardProps): React.ReactElement {

  return (
      <div className={`${className} flex flex-col bg-white-light shadow-card border border-card rounded-card`}>
        { title && <div className='py-4 px-5 text-black-darker border-b border-lang font-semibold text-base'>{title}</div> }
        {children}
      </div>
  );
}

export default Card;