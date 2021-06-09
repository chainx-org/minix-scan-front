import React, { useState, useEffect, useContext } from "react";
import Search from "../../components/Search";
import MinixIcon from "../../components/MinixIcon";
import SearchList from "../../components/SearchList";
import Footer from "../../components/Footer/index";
import homeBg from "../../assets/background.png";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
function Home(): React.ReactElement {
  const {
    isShowSearchList,
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

  const [inputValue, setInputValue] = useState("");

  const searchFun: Function = () => {
    console.log(inputValue);
  };

  const searchInput: Function = (value: any) => {
    if (value) {
      setShowSearchList(true);
      itemValue.map((item) => {
        item.value = value;
      });
      setInputValue(value);
      setItemValue([...itemValue]);
      setShowClearIcon(true);
      return (value = "");
    } else {
      setShowSearchList(false);
      setShowClearIcon(false);
    }
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
            />
          </div>
          <div className="w-100 shadow-sm mt-3 rounded-rounded">
            {isShowSearchList && <SearchList itemList={itemValue} />}
          </div>
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </>
  );
}

export default Home;
