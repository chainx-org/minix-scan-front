import React, { useState, createContext, FC } from "react";
interface clearBtnData {
  isShow?: Boolean | String;
  setIsShow?: Function;
}

export const ClearBtnContext = createContext<clearBtnData>({} as clearBtnData);
export const ClearBtnProvider: FC = ({ children }) => {
  let [isShow, setIsShow] = useState(false);

  return (
    <ClearBtnContext.Provider
      value={{
        isShow,
        setIsShow,
      }}
    >
      {children}
    </ClearBtnContext.Provider>
  );
};
