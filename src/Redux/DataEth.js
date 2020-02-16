let DataETH = {
  DashBroad: []
};
const ListDataETH = (state = DataETH, action) => {
  switch (action.type) {
    case "SHOW_INFO":
      state.DashBroad = action.payload;
      return { ...state };

    default:
      return state;
  }
};
export default ListDataETH;
