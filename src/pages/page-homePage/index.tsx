import React, { useState, useEffect, useContext, Suspense } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "../../components/Search";
import MinixIcon from "../../components/MinixIcon";
import SearchList from "../../components/SearchList";
import Footer from "../../components/Footer/index";
import homeBg from "../../assets/background.png";
import { ClearBtnContext } from "../../components/Provider/ClearBtnProvider";
import { InputContext } from "../../components/Provider/InputProvider";
function Home(): React.ReactElement
{
  const {
    isShowSearchList,
    showClearIcon,
    itemValue,
    setShowSearchList,
    setShowClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const { searchInput, searchFun, directTo, inputValue } =
    useContext(InputContext);
  const homePageImage = {
    background: `url(${homeBg})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="pt-40 h-overSpread" style={homePageImage}>
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
              searchFun={searchFun}
              searchInput={searchInput}
              directTo={directTo}
              mr={24}
            />
          </div>
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </>
  );
}

export default Home;
