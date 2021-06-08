import React from "react";
import Home from "../src/pages/page-homePage";
import Account from "./pages/page-accountPage";
import Trade from "./pages/page-tradePage";
import IndexSearch from "../src/pages/page-indexSearch";
import {HashRouter, Switch, Route} from 'react-router-dom';

const App: React.FC = () => {  
  return (
    <HashRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/account" component={Account}/>
          <Route path="/trade" component={Trade}/>
          <Route path="/indexSearch" component={IndexSearch}/>
        </Switch>
    </HashRouter>
  );
}

export default App;
