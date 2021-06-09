import React, { ReactNode, useRef } from "react";
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
  directTo?: ReactNode;
}
function Search({
  icon,
  clear,
  loadingStatus,
  searchInput,
  searchFun,
  className,
  directTo,
}: seachProps): React.ReactElement<seachProps> {
  const { Search } = Input;
  const SearchIcon = icon ? <img src={searchIcon} /> : "";
  // const ref = createRef<any>();
  const searchButton = useRef<any>(null);
  const clearIconControl = clear ? ClearIcon(searchButton) : ClearIcon();
  console.log("搜索", directTo);
  return (
    <div className={className}>
      <Search
        ref={searchButton}
        placeholder="搜索区块 / 交易 / CID / 账户"
        enterButton={directTo}
        prefix={SearchIcon}
        size="large"
        loading={loadingStatus}
        onChange={(e) => {
          e.target.value = searchInput(e.target.value);
        }}
        onPressEnter={() => {
          searchFun();
        }}
        suffix={clearIconControl}
      />
    </div>
  );
}

export default Search;
