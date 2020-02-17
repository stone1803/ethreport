import React from "react";
import {BrowserRouter, Switch } from "react-router-dom";
import EthTemplate from "./templates/eth";
import {routesETH} from "./router"
const showETH = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <EthTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};
function App() {
  return (
    <BrowserRouter>
    <Switch>
      {showETH(routesETH)}
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
