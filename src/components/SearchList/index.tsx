import React from "react";
import Item from "../SearchList/Item";

function SearchList(): React.ReactElement {
  return (
    <div className="h-58 pt-2.5 pr-30 bg-white-light">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default SearchList;
