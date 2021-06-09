import React, { useRef, createRef, useEffect } from "react";
import { Input } from "antd";
import searchIcon from "../../assets/search-24px.svg";
import ClearIcon from "../ClearIcon/index";

interface seachProps {
  icon: Boolean | String;
  clear: Boolean | String;
  loadingStatus: Boolean | any;
  clearFun?: Function;
  searchInput: Function;
  searchFun: Function;
  onSearch?: Function;
  className?: any;
}
function Search({
  icon,
  clear,
  loadingStatus,
  clearFun,
  searchInput,
  searchFun,
  onSearch,
  className,
}: seachProps): React.ReactElement<seachProps> {
  const { Search } = Input;
  const SearchIcon = icon ? <img src={searchIcon} /> : "";
  const ref = createRef<any>();
  const searchButton = useRef<any>(null);
  const clearIconControl = clear ? ClearIcon(searchButton) : "";

  return (
    <div className={className}>
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