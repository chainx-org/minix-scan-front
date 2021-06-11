import React, { ReactNode, useRef, useContext } from "react";
import { Input } from "antd";
import searchIcon from "../../assets/search-24px.svg";
import ClearIcon from "../ClearIcon/index";
import { InputContext } from "../../hooks/InputProvider";
import SearchList from "../../components/SearchList/index";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
import { Link } from "react-router-dom";

interface seachProps {
  icon: Boolean | String;
  clear: Boolean | String;
  loadingStatus: Boolean | any;
  clearFun?: Function;
  searchInput: Function;
  searchFun: Function;
  onSearch?: Function;
  className?: any;
  mr?: Number;
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
  mr,
}: seachProps): React.ReactElement<seachProps> {
  const { setInputValue, clearInput } = useContext(InputContext);
  const { isShowSearchList } = useContext(ClearBtnContext);
  const { Search } = Input;
  const SearchIcon = icon ? <img src={searchIcon} /> : "";
  const searchButton = useRef<any>(null);
  const clearIconControl = clear ? ClearIcon(searchButton) : ClearIcon();
  const clearInputValue = () => {
    clearInput();
  };
  let itemValue = ["#区块#", "#账户#", "#交易#", "#CID#"];
  return (
    <div className={`relative ${className}`}>
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
        onSearch={clearInputValue}
        suffix={clearIconControl}
      />
      {/* {isShowSearchList && (
        <div className={`shadow-sm mt-3 rounded-rounded mr-${mr}`}>
          <SearchList itemList={itemValue} />
        </div>
      )} */}
    </div>
  );
}

export default Search;
