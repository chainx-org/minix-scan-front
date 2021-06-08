import React from "react";
import { Input } from "antd";
import searchIcon from "../../assets/search-24px.png";
import ClearIcon from "../ClearIcon/index";

interface seachProps {
  icon: Boolean | String;
  clear: Boolean | String;
  loadingStatus: Boolean | any;
  clearFun?: Function;
  searchInput: Function;
  searchFun: Function;
  onSearch?: Function;
}
function Search({
  icon,
  clear,
  loadingStatus,
  clearFun,
  searchInput,
  searchFun,
  onSearch,
}: seachProps): React.ReactElement<seachProps> {
  const { Search } = Input;
  console.log("icon", icon);
  const SearchIcon = icon ? <img src={searchIcon} /> : "";
  console.log("ClearIcon", ClearIcon);
  const clearIconControl = clear ? ClearIcon() : "";
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
      suffix={clearIconControl}
    />
  );
}

export default Search;
