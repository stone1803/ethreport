const CoinMarketCap = require("coinmarketcap-api");

const ethConvertBTC = () => {
  const apiKey = "711448c5-3186-4d6d-b8f1-3226cf76111b";
  const client = new CoinMarketCap(apiKey);
  client.getQuotes({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
};
export { ethConvertBTC };
