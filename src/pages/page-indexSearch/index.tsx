import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Footer from "../../components/Footer/index";
import noData from "../../assets/img_search_none.svg";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
import homeBg from "../../assets/background2.png";
function IndexSearch(): React.ReactElement {
  const {
    showClearIcon,
    itemValue,
    setShowSearchList,
    setShowClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const homePageImage = {
    background: `url(${homeBg})`,
    backgroundSize: "cover",
  };
  const searchInput: Function = (value: any) => {
    if (value) {
      setShowSearchList(true);
      itemValue.map((item) => {
        item.value = value;
      });
      setItemValue([...itemValue]);
      setShowClearIcon(true);
      return (value = "");
    } else {
      setShowSearchList(false);
      setShowClearIcon(false);
    }
  };
  const searchFun: Function = (value: any) => {};
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-overSpread py-6" style={homePageImage}>
        <div className="w-150 h-13 mx-auto">
          <Search
            className={"Search"}
            icon={true}
            clear={showClearIcon}
            clearFun={setItemValue}
            loadingStatus={false}
            searchFun={searchFun()}
            searchInput={searchInput}
          />
        </div>
      </div>
      <div className="w-overSpread h-overSpread bg-gray-light pt-25">
        <div className="w-58 mx-auto">
          <img src={noData} />
          <div className="mt-6 leading-25 text-xms">
            <span>“27364587234598723098423452345”</span>
          </div>
          <div className="mt-2 leading-22 text-base">
            <span>找不到相关数据</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default IndexSearch;
