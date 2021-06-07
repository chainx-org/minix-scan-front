import React from "react";
import Item from "../SearchList/Item";
interface SearchListProps {
  itemList: Array<{ name: String; value: String }>;
}
function SearchList({
  itemList,
}: SearchListProps): React.ReactElement<SearchListProps> {
  console.log("itemList", itemList);
  return (
    <div className="h-58 pt-2.5 pr-30 bg-white-light">
      {itemList.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="item-left">
              <Item itemTitle={item.name} itemValue={item.value} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchList;
