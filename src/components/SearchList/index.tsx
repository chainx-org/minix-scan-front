import React from "react";
import Item from "../SearchList/Item";

function SearchList(): React.ReactElement {
  return (
    <div className="h-58 pt-2.5 pr-30 bg-white-light">
      <Item itemTitle="#区块#" />
      <Item itemTitle="#账户#" />
      <Item itemTitle="#交易#" />
      <Item itemTitle="#CID#" />
    </div>
  );
}

export default SearchList;