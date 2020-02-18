let DataETH = {
  DashBroad: [],
  Workers:[],
  Payouts :[],
  Coin:[]
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
      console.log(action)
      state.Coin= action.payload;
      
      return {...state};
    default:
      return state;
  }
};
export default ListDataETH;
