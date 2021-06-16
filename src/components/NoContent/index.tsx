import React, { useState, useEffect, useContext } from "react";
import Search from "../../components/Search";
import noData from "../../assets/img_search_none.svg";
import { ClearBtnContext } from "../Provider/ClearBtnProvider";
import homeBg from "../../assets/background2.png";
import { InputContext } from "../Provider/InputProvider";
import { useTranslation } from "react-i18next";
interface NoContentProps
{
  title: string | number;
}
function NoContent({ title }: NoContentProps): React.ReactElement
{
  const { t } = useTranslation();
  const {
    showClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const { searchInput, searchFun, directTo } = useContext(InputContext);
  const homePageImage = {
    background: `url(${homeBg})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="w-overSpread py-6 mb-25" style={homePageImage}>
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
      <div className="w-overSpread h-overSpread bg-gray-light flex flex-col">
        <div className="w-58 mx-auto ">
          <img src={noData} style={{ border: "1px dashed" }} />
        </div>
        <div className="mt-6 leading-25 text-xms font-xms font-semibold bg-text-darker text-center">
          <span>“{title}”</span>
        </div>
        <div className="mt-2 leading-22 text-base font-base font-normal bg-text-lighter text-center">
          <span>{t('No relevant data found')}</span>
        </div>
      </div>
    </>
  );
}

export default NoContent;