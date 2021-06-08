import React, { useState, useEffect } from "react";
import Search from "../../components/Search";
import MinixIcon from "../../components/MinixIcon";
import SearchList from "../../components/SearchList";
import Footer from "../../components/Footer/index";
import homeBg from "../../assets/background.png";

function Home(): React.ReactElement {
  let [itemValue, setItemValue] = useState([
    {
      name: "#区块#",
      value: "1",
    },
    {
      name: "#账户#",
      value: "2",
    },
    {
      name: "#交易#",
      value: "1",
    },
    {
      name: "#CID#",
      value: "1",
    },
  ]);
  let [showClearIcon, setShowClearIcon] = useState(false);
  const homePageImage = {
    backgroundSize: "100% 100%", //记得这里100%
    background: `url(${homeBg})`,
  };
  let [isShowSearchList, setShowSearchList] = useState(false);
  const searchInput: Function = (value: any) => {
    if (value) {
      setShowSearchList(true);
      itemValue.map((item) => {
        item.value = value;
      });
      setItemValue([...itemValue]);
      setShowClearIcon(true);
    } else {
      setShowSearchList(false);
      setShowClearIcon(false);
    }
  };
  const searchFun: Function = (value: any) => {};

  return (
    <div className="pt-40 pb-50 h-overSpread" style={homePageImage}>
      <div className="w-150 h-40 flex flex-col mx-auto my-auto">
        <div className="w-223 h-18 justify-center mx-auto mb-10">
          <MinixIcon />
        </div>
        <div className="w-150 h-13 justify-center">
          <Search
            icon={true}
            clear={showClearIcon}
            clearFun={setItemValue}
            loadingStatus={false}
            searchFun={searchFun}
            searchInput={searchInput}
          />
        </div>
        <div className="w-100 shadow-sm">
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
