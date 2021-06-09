import React, { useContext } from "react";
import Search from "../Search";
import SearchList from "../../components/SearchList";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
import { InputContext } from "../../hooks/InputProvider";

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
  const { searchInput, searchFun, directTo } = useContext(InputContext);

  return (
    <>
      <div className="flex justify-between px-12 py-3">
        <div className="py-2">
          <span className="text-base leading-20 ">{titleName}</span>
        </div>
        <div className="w-90">
          <Search
            className={"topSearch"}
            icon={true}
            clear={showClearIcon}
            clearFun={setItemValue}
            loadingStatus={false}
            searchFun={searchFun}
            searchInput={searchInput}
            directTo={directTo}
          />
        </div>
      </div>
      {/* <div className="w-100 shadow-sm mt-3 rounded-rounded">
        {isShowSearchList && <SearchList itemList={itemValue} />}
      </div> */}
    </>
  );
}

export default TopSearchBar;