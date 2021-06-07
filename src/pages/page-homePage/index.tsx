import React from "react";
import Search from "../../components/Search";
import MinixIcon from "../../components/MinixIcon";
import SearchList from "../../components/SearchList";
import { inputFun, searchFun } from "../helper/SearchFun";

function Home(): React.ReactElement {
  return (
    <div className="">
      <div className="w-150 h-40 flex flex-col mx-auto my-auto">
        <div className="w-223 h-18 justify-center mx-auto mb-10">
          <MinixIcon />
        </div>
        <div className="w-150 h-13 justify-center">
          <Search
            icon={true}
            loadingStatus={false}
            searchFun={searchFun}
            inputFun={inputFun}
          />
        </div>
        <div>
          <SearchList />
        </div>
      </div>
    </div>
  );
}

export default Home;
