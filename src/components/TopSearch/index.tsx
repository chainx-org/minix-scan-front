import React, { ReactNode, useContext } from "react";
import Search from "../Search";
import { ClearBtnContext } from "../Provider/ClearBtnProvider";
import { InputContext } from "../Provider/InputProvider";
import TopTitleButton from "../../components/TopTitleButton"

interface IndexProps
{
  titleName?: String;
  titleNode?: Boolean | String;
  titleValue?: String
}
function TopSearchBar({
  titleName,
  titleNode,
  titleValue
}: IndexProps): React.ReactElement<IndexProps>
{
  const {
    showClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const { searchInput, searchFun, directTo } = useContext(InputContext);

  return (
    <>
      <div className="flex justify-between px-12 py-3 h-16">
        {!titleNode && <div className="py-2">
          <span className="text-base leading-20 ">{titleName}</span>
        </div>}
        {titleNode && <TopTitleButton title={titleName ? titleName : ""} value={titleValue ? titleValue : ""} />}
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
            mr={23}
          />
        </div>
      </div>
    </>
  );
}

export default TopSearchBar;
