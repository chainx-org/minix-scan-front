import React, {
  useState,
  createContext,
  useContext,
  FC,
  ReactNode,
} from "react";
import { ClearBtnContext } from "../hooks/ClearBtnProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ClearIcon from "../components/ClearIcon/index";

interface InputData {
  searchInput: Function;
  searchFun: Function;
  directTo: ReactNode;
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
      console.log("inputValue", inputValue);
      const result = /^\d+$/.test(inputValue);
      directPage(result);
    }
  };

  const directPage = (result: Boolean) => {
    if (result) {
      window.location.href = "http://localhost:3000/#/account";
    } else {
      window.location.href = "http://localhost:3000/#/trade";
    }
  };

  const directPageforNode = (result: Boolean) => {
    if (result) {
      setDirectTo(<Link to={`/account?` + inputValue}>搜索</Link>);
    } else {
      setDirectTo(<Link to={`/trade?` + inputValue}>搜索</Link>);
    }
  };

  const searchInput: Function = (value: any) => {
    if (value) {
      setShowSearchList(true);
      itemValue.map((item) => {
        item.value = value;
      });
      setInputValue(value);
      setItemValue([...itemValue]);
      setShowClearIcon(true);
      const result = /^\d+$/.test(inputValue);
      directPageforNode(result);
    } else {
      setShowSearchList(false);
      setShowClearIcon(false);
    }
    console.log("inputValue", inputValue);
  };

  return (
    <InputContext.Provider
      value={{
        searchInput,
        directTo,
        searchFun,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
