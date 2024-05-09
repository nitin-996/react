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