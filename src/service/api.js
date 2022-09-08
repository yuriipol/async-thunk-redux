// export default function fetchGoods(setGoods) {
//   fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products`)
//     .then((result) => result.json())
//     .then((goods) => setGoods(goods));
// }

import axios from "axios";

axios.defaults.baseURL =
  "https://62becfba0bc9b125615fd0f7.mockapi.io/api/products";

export default async function fetchGoods() {
  return await axios.get("");
}
