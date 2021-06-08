import React, { useState, useEffect } from "react";
import TopSearchBar from "../../components/TopSearch";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Footer from "../../components/Footer/index";
import noData from "../../assets/img_search_none.png";

function IndexSearch(): React.ReactElement {
  const searchFun = () => {};
  const searchInput = () => {};

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-overSpread py-6">
        <div className="w-150 h-13 mx-auto">
          {/* <TopSearchBar titleName="交易详情" /> */}
          {/* <Search
            icon={true}
            clear={false}
            loadingStatus={false}
            searchFun={searchFun}
            searchInput={searchInput}
          /> */}
        </div>
      </div>
      {/* <div className="w-overSpread h-overSpread bg-gray-light pt-25">
        <div className="w-58 mx-auto">
          <img src={noData} />
          <div className="mt-6 leading-25 text-xms">
            <span>“27364587234598723098423452345”</span>
          </div>
          <div className="mt-2 leading-22 text-base">
            <span>找不到相关数据</span>
          </div>
        </div>
      </div> */}
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default IndexSearch;
