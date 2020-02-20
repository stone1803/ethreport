import { createAction } from "../Action/action";
const ethConvertUSD = () => {
  var CoinMarketCap = require("node-coinmarketcap");
  var coinmarketcap = new CoinMarketCap();
  return dispatch =>{
    coinmarketcap.multi(coins =>{
      let mang ={
          BTC: coins.get("BTC").price_usd,
          ETH : coins.get("ETH").price_usd,
          ETHBTC:coins.get("ETH").price_btc
      }      
      dispatch(createAction("COIN",mang))
    })
  }

  
};
const Top10Coin = () => {
  var CoinMarketCap = require("node-coinmarketcap");
  var coinmarketcap = new CoinMarketCap();
  return dispatch =>{
    coinmarketcap.multi(coins =>{
   
      dispatch(createAction("TOP10",coins.getTop(10)))
    })
  }

  
};

export { ethConvertUSD,Top10Coin };
