import React from "react";
import { DirectToPage } from "../../helper/DirectPage"
interface itemProps
{
  itemTitle: String;
  inputValue: String;
  itemType: String;
}

function Item({
  itemTitle,
  inputValue,
  itemType,
}: itemProps): React.ReactElement<itemProps>
{
  const clickSearchListItem = () =>
  {
    DirectToPage(itemType, inputValue)
  }
  return (
    <div className="h-10 py-2.5 text-gray hover:bg-gray-dark" onClick={clickSearchListItem}>
      <span className="text-base ml-4 leading-20 ">
        {itemTitle}
        {inputValue}
      </span>
    </div>
  );
}

export default Item;
