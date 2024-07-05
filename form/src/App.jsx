import { useState } from 'react'



function App() {
  const [naam, setNaam] = useState({
    fname: "",
    lname: ""
  });
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

  const inputEvent = (e) => {
    const { name, value } = e.target;

    // When you want to return an object literal from an arrow function without using the return keyword, you need to wrap the object literal in parentheses. This is because JavaScript interprets a standalone object literal like { ... } as a block of code rather than an object literal in this context.

//  Putting these points together, the pattern setNaam((previous) => ({ ... })) is commonly used in React because:

// set the name event variable as key in object using [].
    setNaam((previous) => 
 
    ({
      ...previous,
      [name]: value
    }));
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setSubmitted(true); // Set submitted to true when form is submitted
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <input
            type='text'
            name="fname"
            placeholder='Enter your name'
            value={naam.fname}
            onChange={inputEvent}
          />
          <input
            type='text'
            name="lname"
            placeholder='Enter your last name'
            value={naam.lname}
            onChange={inputEvent}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* Display the input text only if form is submitted */}
      {submitted && (
        <div>
          <h1>Hello {naam.fname} {naam.lname}</h1>
        </div>
      )}
    </>
  );
}

export default App;
// ##############################################################################################

// function App() {
//   const [naam, setNaam] = useState({
//     fname: "",
//     lname: ""
//   });

//   const inputEvent = (e) => {
//     // Extract the 'name' and 'value' properties from the event target (input element)
//     const name = e.target.name;  // Name of the input field
//     const value = e.target.value;  // Value entered by the user
  
//     // Update the state 'naam' using the 'setNaam' function
//     // The 'setNaam' function takes a function as an argument, which receives the previous state
//     // It returns a new state object by spreading the previous state and updating the specific property based on the 'name'
//     setNaam((previousState) => {
//       return {
//         ...previousState,  // Spread the previous state to retain other properties
//         [name]: value  // Update the property specified by 'name' with the new 'value'7u
//       };
//     });
//   };

//   const onSubmits = (event) => {
//     event.preventDefault();
//     // Your submission logic goes here
//   };

//   return (
//     <>
//       <form onSubmit={onSubmits}>
//         <div>
//           <h1>Hello {naam.fname} {naam.lname}</h1>
//           <input
//             type='text'
//             name="fname"
//             placeholder='Enter your name'
//             value={naam.fname}
//             onChange={inputEvent}
//           />
//           <input
//             type='text'
//             name="lname"
//             placeholder='Enter your last name'
//             value={naam.lname}
//             onChange={inputEvent}
//           />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default App;






