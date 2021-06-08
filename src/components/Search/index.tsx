import React, { useRef, createRef, useEffect } from "react";
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
  const SearchIcon = icon ? <img src={searchIcon} /> : "";
  const ref = createRef<any>();
  const searchButton = useRef<any>(null);
  const clearIconControl = clear ? ClearIcon(searchButton) : "";

  return (
    <div>
      <Search
        ref={searchButton}
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
    </div>
  );
}

export default Search;
