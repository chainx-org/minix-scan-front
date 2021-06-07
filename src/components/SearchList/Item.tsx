import React from "react";

function Item(): React.ReactElement {
  return (
    <div className="h-10 py-2.5 hover:bg-gray-dark">
      <span className="text-base ml-4 leading-20 ">#区块#1223456678</span>
    </div>
  );
}

export default Item;
