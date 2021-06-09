import React from "react";
import Item from "../SearchList/Item";
interface SearchListProps {
  itemList: Array<{ name: String; value: String }>;
}
function SearchList({
  itemList,
}: SearchListProps): React.ReactElement<SearchListProps> {
  return (
    <div className="h-58 pt-2.5  bg-white-light  overflow-y-scroll">
      {itemList.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="item-left">
              <Item itemTitle={item.name} itemValue={item.value} />
              <Item itemTitle={item.name} itemValue={item.value} />
              <Item itemTitle={item.name} itemValue={item.value} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchList;