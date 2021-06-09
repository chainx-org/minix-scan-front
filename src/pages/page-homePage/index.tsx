import React, { useState, useEffect, useContext } from "react";
import Search from "../../components/Search";
import MinixIcon from "../../components/MinixIcon";
import SearchList from "../../components/SearchList";
import Footer from "../../components/Footer/index";
import homeBg from "../../assets/background.png";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
function Home(): React.ReactElement {
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
  const homePageImage = {
    background: `url(${homeBg})`,
    backgroundSize: "cover",
  };
  const searchFun: Function = (value: any) => {};

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
  return (
    <div className="pt-40 pb-50 h-overSpread" style={homePageImage}>
      <div className="w-150 h-40 flex flex-col mx-auto my-auto">
        <div className="w-223 h-18 justify-center mx-auto mb-10">
          <MinixIcon />
        </div>
        <div className="w-150 h-13 justify-center">
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
        <div className="w-100 shadow-sm mt-3 rounded-rounded">
          {isShowSearchList && <SearchList itemList={itemValue} />}
        </div>
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
