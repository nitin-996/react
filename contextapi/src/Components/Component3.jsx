import React, { useContext } from 'react';
import { firstName } from '../App';

// function Component3() {
//   return (

//     // consumer expect function that's why we use function but consumer context create callback hell stituation 
//     // that's why we now will use usecontext()
//     <firstName.Consumer>
//       {(fname) => (
//         <h1>My name is {fname}</h1>
//       )}
//     </firstName.Consumer>
//   );
// }

// export default Component3;


// using usecontext

function Component3() {
  const fname = useContext(firstName)


  
  return (
<h1>this is {fname}</h1>
  );
}

export default Component3;