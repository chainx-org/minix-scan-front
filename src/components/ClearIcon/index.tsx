import React, { useContext } from "react";
import clearIcon from "../../assets/close-24px.svg";
import { ClearBtnContext } from "../Provider/ClearBtnProvider";

function ClearIcon(
  searchButton?: React.MutableRefObject<any>
): React.ReactElement
{
  const { setItemValue, setShowSearchList, setShowClearIcon } =
    useContext(ClearBtnContext);
  const clearInputFun = () =>
  {
    // let initData = [{
    //   name: "#区块#",
    //   type: "1",
    // },
    // {
    //   name: "#账户#",
    //   type: "/account?",
    // },
    // {
    //   name: "#交易#",
    //   type: "3",
    // },
    // {
    //   name: "#CID#",
    //   type: "/NFTDetail?",
    // }];

    if (searchButton) {
      searchButton.current.state.value = "";
    }
    // setItemValue(initData);
    setShowSearchList(false);
    setShowClearIcon(false);
  };
  return (
    <>{searchButton && <img src={clearIcon} onClick={clearInputFun}></img>}</>
  );
}

export default ClearIcon;
