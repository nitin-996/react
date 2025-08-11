import { api_url } from "../utils/BaseUrl";
import currencyFormater from "../utils/currency_formatter";
import Button from "./Button";

function Meals_items({ item }) {
  const { name, description, price, image } = item;
  console.log(item);

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
          <Button >Add to cart</Button>
        </p>
      </article>
    </li>
  );
}

export default Meals_items;
