import React from "react";
import Account from "./pages/page-accountPage";
import Trade from "./pages/page-tradePage";
import Home from "../src/pages/page-homePage";
import IndexSearch from "../src/pages/page-indexSearch";
// import  ClearBtnProvider  from "../src/hooks/clearBtnProvider";

function App(): React.ReactElement {
  return (
    <div className="bg-gray-light">
      {/* <ClearBtnProvider> */}
      <Home />
      {/* </ClearBtnProvider> */}
      {/* <Trade /> */}
      {/* <Account /> */}
      <IndexSearch />
    </div>
  );
}

export default App;
