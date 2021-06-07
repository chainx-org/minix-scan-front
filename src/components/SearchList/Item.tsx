import React from "react";
interface itemProps {
  itemTitle: String;
  itemValue: String;
}

function Item({
  itemTitle,
  itemValue,
}: itemProps): React.ReactElement<itemProps> {
  return (
    <div className="h-10 py-2.5 text-gray hover:bg-gray-dark">
      <span className="text-base ml-4 leading-20 ">
        {itemTitle}
        {itemValue}
      </span>
    </div>
  );
}

export default Item;
