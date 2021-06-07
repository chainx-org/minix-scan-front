import React from "react";
import Account from "./pages/page-accountPage";
import Trade from "./pages/page-tradePage";
import Home from "../src/pages/page-homePage";

function App(): React.ReactElement {

  return (
    <div className=' bg-gray-light'>
      <Home />
      {/* <Trade /> */}
      {/* <Account /> */}
    </div>
  );
};

export default App;
