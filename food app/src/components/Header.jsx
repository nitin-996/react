import logo from "../../public/logo.jpg"
import Button from "./Button"


function Header(){

    return <header id="main-header">

        <div id="title">
            <img src={logo} alt=""/>
            <h1>Food App</h1>
        </div>

        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>



    </header>
}

export default Header