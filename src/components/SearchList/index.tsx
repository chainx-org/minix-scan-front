import React, { useContext } from "react";
import Item from "../SearchList/Item";
import { InputContext } from "../../hooks/InputProvider";
interface SearchListProps {
  itemList: Array<String>;
}
function SearchList({
  itemList,
}: SearchListProps): React.ReactElement<SearchListProps> {
  const { inputValue } = useContext(InputContext);
  return (
    <div className="pt-2.5 pb-2.5 bg-white-light  overflow-y-scroll">
      {itemList.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="item-left">
              <Item itemTitle={item} inputValue={inputValue} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchList;
