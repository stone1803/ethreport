import Axios from "axios";
import { createAction } from "./action";

export const actGetDashBroad = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "https://api.ethermine.org/miner/:0x78C56E18906f21c8009FcbA662E8f2C0e1ed196c/dashboard"
    })
   
      .then(res => {
        dispatch(createAction("SHOW_INFO", res.data.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetWorkers = ( )=>{
  return dispatch =>{
    Axios({
      method:"GET",
      url :"https://api.ethermine.org/miner/:0x78C56E18906f21c8009FcbA662E8f2C0e1ed196c/workers"
    })
    .then (res=>{
      console.log(res.data.data)
      dispatch(createAction("SHOW_WORKERS",res.data.data))
    })
    .catch(err=>{
      console.log(err)
    })
  }
}