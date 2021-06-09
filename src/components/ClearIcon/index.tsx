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
    let initData = [
      {
        name: "#区块#",
        value: "",
      },
      {
        name: "#账户#",
        value: "",
      },
      {
        name: "#交易#",
        value: "",
      },
      {
        name: "#CID#",
        value: "",
      },
    ];

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