import React from "react";
import { Input } from "antd";

function Search(): React.ReactElement {
  const { Search } = Input;
  return (
    <div className="w-150 h-13 justify-center">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading
      />
    </div>
  );
}

export default Search;
