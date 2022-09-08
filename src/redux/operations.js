import fetchGoods from "../service/api";
import { initAllGoods } from "../redux/toolkit/sliceAllGoods";

// export const initGoodsOperations = () => (dispatch) => {
//   const launchInit = (data) => {
//     dispatch(initAllGoods(data));
//   };
//   fetchGoods(launchInit);
// };

// export default initGoodsOperations;

export const initGoodsOperations = () => async (dispatch) => {
  const { data } = await fetchGoods();
  //   console.log(data);
  dispatch(initAllGoods(data));
};
