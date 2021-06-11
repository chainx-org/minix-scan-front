import React, {
  useState,
  createContext,
  useContext,
  FC,
  ReactNode,
  useEffect,
} from "react";
import { ClearBtnContext } from "../hooks/ClearBtnProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ClearIcon from "../components/ClearIcon/index";
import { useTranslation } from "react-i18next";

interface InputData {
  searchInput: Function;
  searchFun: Function;
  directTo: ReactNode;
  inputValue: String;
  setInputValue: Function;
  clearInput: Function;
}

export const InputContext = createContext<InputData>({} as InputData);

export const InputProvider: FC = ({ children }) => {
  const { t } = useTranslation();
  const {
    isShowSearchList,
    showClearIcon,
    itemValue,
    setShowSearchList,
    setShowClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const [directTo, setDirectTo] = useState("/");
  const [inputValue, setInputValue] = useState("");
  const searchFun: Function = () => {
    if (inputValue) {
      const result = /^\d+$/.test(inputValue);
      directPage(result);
    }
  };

  const clearInput = () => {
    setInputValue("");
    setShowSearchList(false);
    setShowClearIcon(false);
    setDirectTo("/");
  };
  const directPage = (result: Boolean) => {
    if (result) {
      window.location.href =
        window.location.origin + "/NFTDetail?" + inputValue;
      clearInput();
    } else {
      window.location.href = window.location.origin + "/account?" + inputValue;
      clearInput();
    }
  };

  const directPageforNode = (result: string) => {
    const resultType = /^\d+$/.test(result);
    if (resultType) {
      setDirectTo(`/NFTDetail?${result}`);
    } else {
      setDirectTo(`/account?${result}`);
    }
  };

  const searchInput: Function = (value: any) => {
    if (value) {
      setShowSearchList(true);
      setInputValue(value);
      setShowClearIcon(true);
      directPageforNode(value);
    } else {
      clearInput();
    }
  };

  return (
    <InputContext.Provider
      value={{
        searchInput,
        directTo,
        searchFun,
        inputValue,
        setInputValue,
        clearInput,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
