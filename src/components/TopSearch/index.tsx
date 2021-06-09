import React, { useContext } from "react";
import Search from "../Search";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
import SearchList from "../../components/SearchList";

interface IndexProps {
  titleName: String;
}
function TopSearchBar({
  titleName,
}: IndexProps): React.ReactElement<IndexProps> {
  const {
    isShow,
    isShowSearchList,
    showClearIcon,
    itemValue,
    setIsShow,
    setShowSearchList,
    setShowClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const searchFun = () => {};
  const searchInput = () => {};
  return (
    <>
      <div className="flex justify-between px-12 py-3">
        <div className="py-2">
          <span className="text-base leading-20 ">{titleName}</span>
        </div>
        <div className="w-90">
          <Search
            className={"topSearch"}
            icon={false}
            clear={false}
            loadingStatus={false}
            searchFun={searchFun}
            searchInput={searchInput}
          />
        </div>
      </div>
      <div className="w-100 shadow-sm mt-3 rounded-rounded">
        {isShowSearchList && <SearchList itemList={itemValue} />}
      </div>
    </>
  );
}

export default TopSearchBar;
