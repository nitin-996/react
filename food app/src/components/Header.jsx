import logo from "../../public/logo.jpg"


function Header(){

    return <header id="main-header">

        <div id="title">
            <img src={logo} alt=""/>
            <h1>Food App</h1>
        </div>

        <nav>
            <button >
            Cart (0)
        </button>
        </nav>



    </header>
}

export default Header