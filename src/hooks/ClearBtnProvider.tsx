import React, { useState, createContext, FC } from "react";
interface clearBtnData {
  isShow?: Boolean | String;
  isShowSearchList: Boolean | String;
  showClearIcon: Boolean | String;
  itemValue: Array<{ name: String; value: String }>;
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
