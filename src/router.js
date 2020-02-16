import Home from "./Layout/Home";
import EthMap from "./Layout/Ethmap";
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
  }
];
export { routesETH };
