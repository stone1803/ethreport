let DataETH = {
  DashBroad: [],
  Workers:[],
  Payouts :[],
  Coin:[],
  Top10Coin:[]
};
const ListDataETH = (state = DataETH, action) => {
  switch (action.type) {
    case "SHOW_INFO":
      state.DashBroad = action.payload;
      return { ...state };
    case "SHOW_WORKERS":
      state.Workers = action.payload;
      return {...state};
    case "COIN":
      state.Coin= action.payload;
      
      return {...state};
    case "TOP10":
      console.log(action)
      state.Top10Coin=action.payload
    default:
      return state;
  }
};
export default ListDataETH;
