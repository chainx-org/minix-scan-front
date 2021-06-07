import React from "react";
import { Input } from "antd";
import searchIcon from "../../assets/search-24px.png";

interface seachProps {
  searchIcon: Boolean | String;
  loadingStatus: Boolean | any;
  inputFun: Function;
  searchFun: Function;
  onSearch?: Function;
}
function Search({
  searchIcon,
  loadingStatus,
  inputFun,
  searchFun,
  onSearch,
}: seachProps): React.ReactElement<seachProps> {
  const { Search } = Input;
  console.log("searchIcon", searchIcon);
  const SearchIcon = searchIcon ? "0" : "1";
  return (
    <Search
      placeholder="搜索区块 / 交易 / CID / 账户"
      enterButton="搜索"
      prefix={SearchIcon}
      size="large"
      loading={loadingStatus}
      onChange={() => inputFun()}
      onPressEnter={() => searchFun()}
      onSearch={() => searchFun()}
      allowClear
    />
  );
}

export default Search;
