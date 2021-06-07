import React from "react";
import ListItem from "./ListItem";

interface Item {
    title: string;
    content: React.ReactNode;
}
interface ListProps {
    className?: string;
    children?: React.ReactNode;
    list: Item[]
}
function List({className = '', children, list }:ListProps): React.ReactElement {

    return (
      <div className={`${className} px-5 pb-4 mx-12 mt-10 bg-white-light shadow-card border border-b-card rounded-card`}>
        {
            list.map((item)=>{
                return <ListItem title={item.title} content={item.content} />
            })
        }
      </div>
    );
}

export default List;
