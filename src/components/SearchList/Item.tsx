import React, { useContext } from "react";

interface itemProps {
  itemTitle: String;
  inputValue: String;
}

function Item({
  itemTitle,
  inputValue,
}: itemProps): React.ReactElement<itemProps> {
  console.log("inputValue", inputValue);
  return (
    <div className="h-10 py-2.5 text-gray hover:bg-gray-dark">
      <span className="text-base ml-4 leading-20 ">
        {itemTitle}
        {inputValue}
      </span>
    </div>
  );
}

export default Item;
