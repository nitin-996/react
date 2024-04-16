import React from 'react'
import { firstName } from '../App'
function Component3() {
  return 

    // its consumer , it only wants function
    <firstName.Consumer>{(fname)=>{

    return <h1>my name is monoto {fname}<h1/>;
    }}
    </firstName.Consumer>
   
  
}

export default Component3