import React from "react";
import ListItem from "./ListItem";

interface ListProps {
    className?: string;
    children?: React.ReactNode;
}
function List({className = '', children }:ListProps): React.ReactElement {

    const list = [
        {
            title: '区块高度',
            content: '672812',
            blueColor: true
        },
        {
            title: '出块时间',
            content: '2018.09.12 16:24:36',
            blueColor: false
        },
        {
            title: '区块高度',
            content: '672812',
            blueColor: true
        },
        {
            title: '出块时间',
            content: '2018.09.12 16:24:36',
            blueColor: false
        },
        {
            title: '区块高度',
            content: '672812',
            blueColor: true
        },
        {
            title: '出块时间',
            content: '2018.09.12 16:24:36',
            blueColor: false
        },
        {
            title: '区块高度',
            content: '672812',
            blueColor: true
        },
        {
            title: '出块时间',
            content: '2018.09.12 16:24:36',
            blueColor: false
        },
        {
            title: '区块高度',
            content: '672812',
            blueColor: true
        },
        {
            title: '出块时间',
            content: '2018.09.12 16:24:36',
            blueColor: false
        }
    ]
    return (
      <div className={`${className} px-5 pb-4 mx-12 mt-10 bg-white-light shadow-card border border-b-card rounded-card`}>
        {
            list.map((item)=>{
                return <ListItem title={item.title} content={item.content} blueColor={item.blueColor} />
            })
        }
      </div>
    );
}

export default List;
