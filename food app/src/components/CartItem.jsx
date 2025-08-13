import { useContext } from "react"
import CartContext from "../Context/Cart_Context"
import currencyFormater from "../utils/currency_formatter";



function CartItem({item}) {

    console.log(item);
    
const totalPrice = item.price * item.quantity

const cart_Ctx = useContext(CartContext)


function handleIncreaseItem(){

    cart_Ctx.addItem(item)
}

function handleDecreaseItem(){

    cart_Ctx.removeItem(item.id)
}
    return <li className="cart-item">

        <p>{item.name} - {currencyFormater(totalPrice)}</p>
        <p className="cart-item-action">
            <button onClick={handleDecreaseItem}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncreaseItem}>+</button>
        </p>

    </li>
}

export default CartItem