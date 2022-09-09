import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addProductAction } from "../redux/actions";
// import { addProductAction } from "../redux/toolkit/actions";
import { addProduct } from "../redux/toolkit/cart-slice";
// import fetchGoods from "../service/api";
import { initGoodsOperations } from "../redux/toolkit/operations";

export default function Home() {
  // const [goods, setGoods] = useState([]);
  const goods = useSelector((state) => state.cartAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initGoodsOperations());
    // fetchGoods(setGoods);
  }, [dispatch]);

  function handleClick(item) {
    dispatch(addProduct(item));
  }

  return (
    <>
      <ol>
        {goods.map((item) => (
          <li key={item.name} onClick={() => handleClick(item)}>
            {item.name} - {item.price}
          </li>
        ))}
      </ol>
    </>
  );
}
