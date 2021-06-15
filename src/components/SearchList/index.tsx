import React, { useContext } from "react";
import Item from "../SearchList/Item";
import { InputContext } from "../Provider/InputProvider";
interface SearchListProps
{
  itemList: Array<any>;
}
function SearchList({
  itemList,
}: SearchListProps): React.ReactElement<SearchListProps>
{
  const { inputValue } = useContext(InputContext);
  console.log('itemList', itemList)
  return (
    <div className="pt-2.5 pb-2.5 bg-white-light overflow-y-scroll">
      {itemList.map((item, index) =>
      {
        if (inputValue.length < 12 && (item.name == '#区块#' || item.name == '#CID#')) {
          return (
            <div className="item" key={index}>
              <div className="item-left">
                <Item itemTitle={item.name} itemType={item.type} inputValue={inputValue} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SearchList;
