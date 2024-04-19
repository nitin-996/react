import { useState } from 'react'
import { createContext } from 'react'
import Component3 from './Components/Component3';
import UseEffectHook from './hooks_uses/UseEffectHook';
import Pokemon from './Components/Pokemon';
import Object_Prop from './Components/Object_Prop';

  export {firstName}
// created context
const firstName = createContext();



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Object_Prop></Object_Prop>
    
<Pokemon></Pokemon>

<UseEffectHook/>
{/* // context provider */}
    <firstName.Provider value={"nitin"}><Component3/></firstName.Provider>
     

    </>
  )
}

export default App
