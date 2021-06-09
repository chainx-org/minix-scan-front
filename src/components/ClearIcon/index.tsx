import React, { useContext } from "react";
import clearIcon from "../../assets/close-24px.svg";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";

function ClearIcon(
  searchButton?: React.MutableRefObject<any>
): React.ReactElement {
  const { setItemValue, setShowSearchList, setShowClearIcon } =
    useContext(ClearBtnContext);
  console.log("searchButton", searchButton);
  const clearInputFun = () => {
    let initData = ["#区块#", "#账户#", "#交易#", "#CID#"];

    if (searchButton) {
      searchButton.current.state.value = "";
    }
    setItemValue(initData);
    setShowSearchList(false);
    setShowClearIcon(false);
  };
  return (
    <>{searchButton && <img src={clearIcon} onClick={clearInputFun}></img>}</>
  );
}

export default ClearIcon;
