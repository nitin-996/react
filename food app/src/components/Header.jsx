import { useContext } from "react"
import logo from "../../public/logo.jpg"
import Button from "./Button"
import CartContext from "../Context/Cart_Context"
import progressCartContext from "../Context/User_progress_Context"


function Header(){

    const cartContext = useContext(CartContext)

    const progress_CTX = useContext(progressCartContext)

    const totalquantity = cartContext.items.reduce((total , item)=>{

        return total+ item.quantity;
    },0)

    function handleCart(){

        console.log("handlecart executed");
        
         progress_CTX.showCart()
    }



    return <header id="main-header">

        <div id="title">
            <img src={logo} alt=""/>
            <h1>Food App</h1>
        </div>

        <nav>
            <Button textOnly onClick={handleCart} >Cart ({totalquantity})</Button>
        </nav>



    </header>
}

export default Header