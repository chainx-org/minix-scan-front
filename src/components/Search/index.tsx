import React from "react";
import { Input } from "antd";

function Search(): React.ReactElement {
  const { Search } = Input;
  return (
    <div className="flex w-20 h-78.5 py-6.5 justify-center items-center bg-white-dark">
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
