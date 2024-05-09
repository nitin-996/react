import React from 'react';



export default function App() {
    
    const [isdelete , setdelete]  = React.useState(false)
    
    
        
        const fun = ()=> setdelete(true)
        
        
        const Proceed =()=>{setdelete(false)}
        
    return (
      <div>
        {isdelete ? <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick = {Proceed}>Proceed</button>
        </div> : <button onClick = {fun}>Delete</button> }
        
      </div>    
    );
}



// ##################################### same type of code ################################

import React from 'react';

export default function App() {
    
    const [css , setcss]= React.useState(false)
    
    const set = ()=>{
        setcss(true)
    }
    
    return (
        <div>
        {css ? <p className = "active">Style me!</p> : <p>Style me!</p>}
            
            <button onClick={set}>Toggle style</button>
        </div>
    );
}
