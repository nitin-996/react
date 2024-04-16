import { useState } from 'react'
import { createContext } from 'react'
import Component3 from './Components/Component3';

  export {firstName}
// created context
const firstName = createContext();


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

{/* // context provider */}
    <firstName.Provider value={"nitin"}><Component3/></firstName.Provider>
     

    </>
  )
}

export default App
