import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Footer from "../../components/Footer/index";
import SearchList from "../../components/SearchList";
import noData from "../../assets/img_search_none.svg";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";
import homeBg from "../../assets/background2.png";
import { InputContext } from "../../hooks/InputProvider";
import { useTranslation } from "react-i18next";
interface NoDataPageProps {
  searchValue?: String;
}
function NoDataPage({
  searchValue,
}: NoDataPageProps): React.ReactElement<NoDataPageProps> {
  const { t } = useTranslation();
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
  const homePageImage = {
    background: `url(${homeBg})`,
    backgroundSize: "cover",
  };

  return (
    <div>
      <Header />
      <div className="w-overSpread py-6" style={homePageImage}>
        <div className="w-150 h-13 mx-auto">
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
      <div className="w-overSpread h-overSpread bg-gray-light pt-25">
        <div className="w-58 mx-auto ">
          <img src={noData} style={{ border: "1px dashed" }} />
        </div>
        <div className="mt-6 leading-25 text-xms font-xms font-semibold bg-text-darker text-center">
          <span>"{searchValue}"</span>
        </div>
        <div className="h-102 mt-2 leading-22 text-base font-base font-normal bg-text-lighter text-center">
          <span>{t('No relevant data found')}</span>
        </div>
      </div>
      <Footer className="fixed bottom-0" />
    </div>
  );
}

export default NoDataPage;
