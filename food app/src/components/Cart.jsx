import { useContext } from "react"
import CartContext from "../Context/Cart_Context"
import Modal from "./Modal"
import currencyFormater from "../utils/currency_formatter"
import Button from "./Button"
import progressCartContext from "../Context/User_progress_Context"
import CartItem from "./CartItem"


function Cart() {

const cartContext = useContext(CartContext)
const progress_CTX = useContext(progressCartContext)

const totalPrice = cartContext.items.reduce((total,item)=>{
    return total + (item.quantity * item.price)
},0)

function handleCloseCart(){

    console.log("handle close executed");
    console.log(progress_CTX.progress);
    
    progress_CTX.hideCart()
}

  return (
    <Modal open={progress_CTX.progress === "cart"}>

        <h3 className="cart">Checkout Modal</h3>
        <ul className="">{cartContext.items.map((item)=>{
          return <CartItem key={item.id} item={item} />
        })}</ul>

        <p className="cart-total">{currencyFormater(totalPrice)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart} >close</Button>
            <Button onClick={handleCloseCart}>Checkout</Button>
            </p>
    </Modal>
  )
}

export default Cart