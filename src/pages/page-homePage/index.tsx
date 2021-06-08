import React, { useState, useEffect } from "react";
import Search from "../../components/Search";
import MinixIcon from "../../components/MinixIcon";
import SearchList from "../../components/SearchList";
import { searchFun } from "../helper/SearchFun";
import Footer from "../../components/Footer/index";

function Home(): React.ReactElement {
  let [itemValue, setItemValue] = useState([
    {
      name: "#区块#",
      value: "1",
    },
    {
      name: "#账户#",
      value: "2",
    },
    {
      name: "#交易#",
      value: "1",
    },
    {
      name: "#CID#",
      value: "1",
    },
  ]);
  let [isShowSearchList, setShowSearchList] = useState(false);
  const searchInput: Function = (value: any) => {
    if (value) {
      setShowSearchList(true);
      itemValue.map((item) => {
        item.value = value;
      });
      setItemValue([...itemValue]);
    } else {
      setShowSearchList(false);
    }
  };

  return (
    <div className="pt-40">
      <div className="w-150 h-40 flex flex-col mx-auto my-auto">
        <div className="w-223 h-18 justify-center mx-auto mb-10">
          <MinixIcon />
        </div>
        <div className="w-150 h-13 justify-center">
          <Search
            icon={true}
            loadingStatus={false}
            searchFun={searchFun}
            searchInput={searchInput}
          />
        </div>
        <div>{isShowSearchList && <SearchList itemList={itemValue} />}</div>
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
