import React, { useState, createContext, FC } from "react";
interface clearBtnData {
  isShow?: Boolean | String;
  isShowSearchList: Boolean | String;
  showClearIcon: Boolean | String;
  itemValue: Array<String>;
  setIsShow: Function;
  setShowSearchList: Function;
  setShowClearIcon: Function;
  setItemValue: Function;
}

export const ClearBtnContext = createContext<clearBtnData>({} as clearBtnData);
export const ClearBtnProvider: FC = ({ children }) => {
  let [isShow, setIsShow] = useState(false);
  let [isShowSearchList, setShowSearchList] = useState(false);
  let [showClearIcon, setShowClearIcon] = useState(false);
  let [itemValue, setItemValue] = useState([
    "#区块#",
    "#账户#",
    "#交易#",
    "#CID#",
  ]);

  return (
    <ClearBtnContext.Provider
      value={{
        isShow,
        isShowSearchList,
        showClearIcon,
        itemValue,
        setIsShow,
        setShowSearchList,
        setShowClearIcon,
        setItemValue,
      }}
    >
      {children}
    </ClearBtnContext.Provider>
  );
};
