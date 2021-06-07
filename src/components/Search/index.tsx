import React from "react";
import { Input } from "antd";
import searchIcon from "../../assets/search-24px.png";

interface seachProps {
  icon: Boolean | String;
  loadingStatus: Boolean | any;
  searchInput: Function;
  searchFun: Function;
  onSearch?: Function;
}
function Search({
  icon,
  loadingStatus,
  searchInput,
  searchFun,
  onSearch,
}: seachProps): React.ReactElement<seachProps> {
  const { Search } = Input;
  console.log("icon", icon);
  const SearchIcon = icon ? <img src="../src/assets/search-24px.png" /> : "1";
  return (
    <Search
      placeholder="搜索区块 / 交易 / CID / 账户"
      enterButton="搜索"
      prefix={SearchIcon}
      size="large"
      loading={loadingStatus}
      onChange={(e) => {
        e.target.value = searchInput(e.target.value);
      }}
      onPressEnter={() => searchFun()}
      onSearch={() => searchFun()}
      allowClear
    />
  );
}

export default Search;
