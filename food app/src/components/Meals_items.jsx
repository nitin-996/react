import { useContext } from "react";
import { api_url } from "../utils/BaseUrl";
import currencyFormater from "../utils/currency_formatter";
import Button from "./Button";
import CartContext from "../Context/Cart_Context";


function Meals_items({ item }) {
  const { name, description, price, image } = item;
  // console.log(item);

  const cartContext = useContext(CartContext)

  function handleAddMealItem(){

    cartContext.addItem(item)
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`${api_url}/${image}`} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormater(price)}</p>
          <p className="meal-item-description ">{description}</p>
        </div>

        <p className="meal-item-actions">
          <Button onClick={handleAddMealItem} >Add to cart</Button>
        </p>
      </article>
    </li>
  );
}

export default Meals_items;
