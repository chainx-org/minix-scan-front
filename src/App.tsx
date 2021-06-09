import React from "react";
import Home from "../src/pages/page-homePage";
import Account from "./pages/page-accountPage";
import Trade from "./pages/page-tradePage";
import NFTDetail from "./pages/page-nftDetailPage";
import IndexSearch from "../src/pages/page-indexSearch";
import Block from "./pages/page-blockPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { ClearBtnProvider } from "./hooks/ClearBtnProvider";

const App: React.FC = () => {
  return (
    <HashRouter>
        <ClearBtnProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/trade" component={Trade} />
            <Route path="/NFTDetail" component={NFTDetail} />
            <Route path="/indexSearch" component={IndexSearch} />
            <Route path="/block" component={Block} />
          </Switch>
        </ClearBtnProvider>
    </HashRouter>
  );
};

export default App;
