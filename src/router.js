import Home from "./Layout/Home";
import EthMap from "./Layout/Ethmap";
import Report from "./Layout/Report"
import Uti from "./Layout/Uti"
const routesETH = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/Ethmap",
    exact: false,
    component: EthMap
  },
  {
    path:"/Report",
    exact:false,
    component:Report
  },
  {
    path:"/Uti",
    exact:false,
    component:Uti
  }
];
export { routesETH };
