import React, { useContext } from "react";
import clearIcon from "../../assets/close-24px.svg";
import { ClearBtnContext } from "../../hooks/ClearBtnProvider";

function ClearIcon(
  searchButton: React.MutableRefObject<any>
): React.ReactElement {
  const { isShow, setItemValue, setShowSearchList, setShowClearIcon } =
    useContext(ClearBtnContext);
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
    setItemValue(initData);
    setShowSearchList(false);
    setShowClearIcon(false);
    searchButton.current.state.value = "";
  };
  return (
    <div>
      <img src={clearIcon} onClick={clearInputFun}></img>
    </div>
  );
}

export default ClearIcon;