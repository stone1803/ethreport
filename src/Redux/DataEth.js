let DataETH = {
  DashBroad: [],
  Workers:[]
};
const ListDataETH = (state = DataETH, action) => {
  switch (action.type) {
    case "SHOW_INFO":
      state.DashBroad = action.payload;
      return { ...state };
    case "SHOW_WORKERS":
      state.Workers = action.payload;
      return {...state};
    default:
      return state;
  }
};
export default ListDataETH;
