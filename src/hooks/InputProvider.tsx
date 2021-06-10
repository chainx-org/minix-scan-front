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
  const {
    isShowSearchList,
    showClearIcon,
    itemValue,
    setShowSearchList,
    setShowClearIcon,
    setItemValue,
  } = useContext(ClearBtnContext);
  const [directTo, setDirectTo] = useState(<Link to="/">搜索</Link>);
  const [inputValue, setInputValue] = useState("");
  const searchFun: Function = () => {
    if (inputValue) {
      // console.log("inputValue", inputValue);
      const result = /^\d+$/.test(inputValue);
      directPage(result);
    }
  };

  const clearInput = () => {
    setInputValue("");
    setShowSearchList(false);
    setShowClearIcon(false);
    setDirectTo(<Link to={`/`}>搜索</Link>);
  };
  const directPage = (result: Boolean) => {
    if (result) {
      window.location.href = "http://localhost:3000/#/NFTDetail?" + inputValue;
      clearInput();
    } else {
      window.location.href = "http://localhost:3000/#/trade?" + inputValue;
      clearInput();
    }
  };

  const directPageforNode = (result: string) => {
    const resultType = /^\d+$/.test(result);
    if (resultType) {
      setDirectTo(<Link to={`/NFTDetail?` + result}>搜索</Link>);
    } else {
      setDirectTo(<Link to={`/trade?` + result}>搜索</Link>);
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
