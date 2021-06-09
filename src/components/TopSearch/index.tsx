import React from "react";
import Search from "../Search";

interface IndexProps {
  titleName: String;
}
function TopSearchBar({
  titleName,
}: IndexProps): React.ReactElement<IndexProps> {
  const searchFun = () => {};
  const searchInput = () => {};
  return (
    <div className="flex justify-between px-12 py-3">
      <div className="py-2">
        <span className="text-base leading-20 ">{titleName}</span>
      </div>
      <div className="w-90">
        <Search
          className={"topSearch"}
          icon={true}
          clear={false}
          loadingStatus={false}
          searchFun={searchFun}
          searchInput={searchInput}
        />
      </div>
    </div>
  );
}

export default TopSearchBar;
