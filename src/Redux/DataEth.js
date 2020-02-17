let DataETH = {
  DashBroad: [],
  Workers:[],
  Payouts :[],
  ETH:[]
};
const ListDataETH = (state = DataETH, action) => {
  switch (action.type) {
    case "SHOW_INFO":
      state.DashBroad = action.payload;
      return { ...state };
    case "SHOW_WORKERS":
      state.Workers = action.payload;
      return {...state};
    case "ETH":
      console.log(action)
      state.ETH= action.payload;
      
      return {...state};
    default:
      return state;
  }
};
export default ListDataETH;
