import { useState } from 'react'
import { createContext } from 'react'
import Component3 from './Components/Component3';
import Pokemon from './Components/Pokemon';

  export {firstName}
// created context
const firstName = createContext();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Pokemon></Pokemon>

{/* // context provider */}
    <firstName.Provider value={"nitin"}><Component3/></firstName.Provider>
     

    </>
  )
}

export default App
