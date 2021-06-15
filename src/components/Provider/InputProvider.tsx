import React, {
  useState,
  createContext,
  useContext,
  FC,
  ReactNode,
} from "react";
import { ClearBtnContext } from "./ClearBtnProvider";
import { useTranslation } from "react-i18next";

interface InputData
{
  searchInput: Function;
  searchFun: Function;
  directTo: ReactNode;
  inputValue: String;
  setInputValue: Function;
  clearInput: Function;
}

export const InputContext = createContext<InputData>({} as InputData);

export const InputProvider: FC = ({ children }) =>
{
  const { t } = useTranslation();
  const {
    setShowSearchList,
    setShowClearIcon,
  } = useContext(ClearBtnContext);
  const [directTo, setDirectTo] = useState("/");
  const [inputValue, setInputValue] = useState("");


  const searchFun = () =>
  {
    if (inputValue.length <= 12) {
      window.location.href =
        window.location.origin + "/NFTDetail?" + inputValue;
      clearInput();
    } else if (inputValue.length > 12 && inputValue.length < 50) {
      window.location.href = window.location.origin + "/account?" + inputValue;
      clearInput();
    } else {
      window.location.href = window.location.origin + "/trade?" + inputValue;
      clearInput();
    }
  };

  const directPageforNode = (result: string) =>
  {
    if (result.length <= 12) {
      setDirectTo(`/NFTDetail?${result}`);
    } else if (result.length > 12 && result.length < 50) {
      setShowSearchList(false);
      setDirectTo(`/account?${result}`);
    } else {
      setShowSearchList(false);
      setDirectTo(`/trade?${result}`);
    }
  };

  const clearInput = () =>
  {
    setInputValue("");
    setShowSearchList(false);
    setShowClearIcon(false);
    setDirectTo("/");
  };

  const searchInput: Function = (value: any) =>
  {
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
