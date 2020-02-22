const TelegramBot = require('node-telegram-bot-api');
const token = "801938505:AAHjsZ7NeQuz8IiPe_c79EFn2PQaJVpnxMI";
const rs = require("request");
var CoinMarketCap = require("node-coinmarketcap");
  var coinmarketcap = new CoinMarketCap();

 const coin =()=>{
     return coinmarketcap.get("bitcoin", coin => {
        return coin.price_usd// Prints the price in USD of BTC at the moment.
      });
      
 } 
coin()
// replace the value below with the Telegram token you receive from @BotFather
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 
// Matches "/echo [whatever]"
bot.onText(/\/,may (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const chatId = msg.chat.id;
  const resp =match[1]; // the captured "whatever"
 
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});