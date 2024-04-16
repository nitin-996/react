import React,{ useState } from 'react'


function App() {
  let time = new Date().toLocaleTimeString();
  const [mydate, setmydate] = useState(time)
 
  
 
 const updatetime=() =>{
  let timr = new Date().toLocaleTimeString();
  setmydate(timr)
 }
    
   setInterval(updatetime
     , 100)
  
  


  return (
    <>
  <div>
    <h1>{mydate} </h1>

   

    </div>   
    </>
  )
}

export default App



// const update = () =>{
//   let time_nyc = new Date().toLocaleTimeString();
//   setmydate(time_nyc)

// }