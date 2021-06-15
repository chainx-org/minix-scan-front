import React, { useState, createContext, FC } from "react";
interface clearBtnData {
  isShow?: Boolean | String;
  isShowSearchList: Boolean | String;
  showClearIcon: Boolean | String;
  itemValue: Array<any>;
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
    // {
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
    // }
  ]
);

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
