import React from "react";
import Home from "../src/pages/page-homePage";
import Account from "./pages/page-accountPage";
import Trade from "./pages/page-tradePage";
import NFTDetail from "./pages/page-nftDetailPage";
import NoDataPage from "./pages/page-noDataPage";
import Block from "./pages/page-blockPage";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { ClearBtnProvider } from "./hooks/ClearBtnProvider";
import { InputProvider } from "./hooks/InputProvider";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ClearBtnProvider>
        <InputProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/trade" component={Trade} />
            <Route path="/NFTDetail" component={NFTDetail} />
            <Route path="/noDataPage" component={NoDataPage} />
            <Route path="/Block" component={ Block}/>
          </Switch>
        </InputProvider>
      </ClearBtnProvider>
    </BrowserRouter>
  );
};

export default App;
