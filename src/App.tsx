import React from "react";
import Home from "../src/pages/page-homePage";
import Account from "./pages/page-accountPage";
import Trade from "./pages/page-tradePage";
import NFTDetail from "./pages/page-nftDetailPage";
import IndexSearch from "../src/pages/page-indexSearch";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ClearBtnProvider } from "./hooks/ClearBtnProvider";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <ClearBtnProvider>
          <Route path="/" exact component={Home} />
        </ClearBtnProvider>
        <Route path="/account" component={Account} />
        <Route path="/trade" component={Trade} />
        <Route path='/NFTDetail' component={NFTDetail} />
        <Route path="/indexSearch" component={IndexSearch} />
      </Switch>
    </HashRouter>
  );
};

export default App;
