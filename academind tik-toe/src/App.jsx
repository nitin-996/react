import { useState } from "react"
import Gameboard from "../Components/Gameboard"
import Players from "../Components/Players"

function App() {
  
const [activeplayer , setactiveplayer] = useState()

const handleSelectsquare=()=>{
  setactiveplayer((prevalue)=>(prevalue === "X" ? "O" : "X"))
}
  return (
    <main >

<div id="game-container">
<ol id="players" className="highlight-player">

  <Players name="Player 1" symbol="X" isActive={activeplayer === "X"}/>
  <Players name="Player 2" symbol="O" isActive={activeplayer === "O"}/>

</ol>
<Gameboard onSelectExecute={handleSelectsquare } activeSymbolOnBoard={activeplayer} />
</div>

    </main>
  )
}

export default App
