# react

- now under the hood instead of virtual dom now react use fiver.
[react fiber](https://github.com/acdlite/react-fiber-architecture)

# optional chaining operator


In the code snippet you provided:

```javascript
const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
```

The question mark (`?`) is used as part of the optional chaining operator (`?.`). This operator is a new feature introduced in ECMAScript 2020 (ES11) and is used to avoid errors when accessing properties or calling methods on potentially null or undefined values.

Let's break down how the optional chaining operator is used in your code:

1. `passwordRef.current?.select();`: This line attempts to call the `select()` method on the `current` property of the `passwordRef` object. The `?.` operator ensures that if `passwordRef.current` is null or undefined, the `select()` method will not be called, avoiding a potential error.

2. `passwordRef.current?.setSelectionRange(0, 999);`: Similarly, this line attempts to call the `setSelectionRange()` method on the `current` property of `passwordRef`. Again, the `?.` operator prevents the method call if `passwordRef.current` is null or undefined.

3. `window.navigator.clipboard.writeText(password)`: This line writes the `password` to the clipboard using the `writeText()` method of `navigator.clipboard`. Note that this line does not use optional chaining because `window.navigator.clipboard` is expected to be available in a modern browser environment.

In summary, the question mark (`?`) in your code helps prevent errors by checking if an object or property exists before attempting to access or use it. If the object or property is null or undefined, the operation is skipped, avoiding potential runtime errors.

# hooks explaination

Sure, I'll explain when to use `useEffect`, `useRef`, and `useCallback` hooks in React, along with examples for each.

1. `useEffect`:
   The `useEffect` hook is used to perform side effects in a functional component. Side effects can include data fetching, subscriptions, or manually changing the DOM.

   Example:
   ```jsx
   import React, { useState, useEffect } from 'react';

   const Timer = () => {
     const [count, setCount] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCount((prevCount) => prevCount + 1);
       }, 1000);

       return () => clearInterval(interval);
     }, []); // Empty dependency array means this effect runs only once after initial render

     return <div>Count: {count}</div>;
   };

   export default Timer;
   ```

   In this example, `useEffect` is used to create an interval timer that updates the `count` state every second. The cleanup function returned from `useEffect` clears the interval when the component unmounts.

2. `useRef`:
   The `useRef` hook is used to create a mutable reference that persists across renders. It's commonly used to access DOM elements or to store mutable values without causing re-renders.

   Example:
   ```jsx
   import React, { useRef, useEffect } from 'react';

   const InputFocus = () => {
     const inputRef = useRef(null);

     useEffect(() => {
       inputRef.current.focus();
     }, []);

     return <input ref={inputRef} />;
   };

   export default InputFocus;
   ```

   In this example, `useRef` is used to create a ref that references an input element. The `useEffect` hook with an empty dependency array ensures that the input gets focused only once after the initial render.

3. `useCallback`:
   The `useCallback` hook is used to memoize functions to avoid unnecessary re-creations, especially when passing functions as props to child components.

   Example:
   ```jsx
   import React, { useState, useCallback } from 'react';

   const ParentComponent = () => {
     const [count, setCount] = useState(0);

     const incrementCount = useCallback(() => {
       setCount((prevCount) => prevCount + 1);
     }, []); // Empty dependency array means this callback doesn't depend on any props or state

     return (
       <div>
         <p>Count: {count}</p>
         <ChildComponent increment={incrementCount} />
       </div>
     );
   };

   const ChildComponent = ({ increment }) => {
     // Some child component logic here
     return <button onClick={increment}>Increment Count</button>;
   };

   export default ParentComponent;
   ```

   In this example, `useCallback` is used to memoize the `incrementCount` function so that it's not recreated on every render of the `ParentComponent`. This optimization can be beneficial when passing callbacks to child components to prevent unnecessary re-renders.

In summary:
- Use `useEffect` for managing side effects in functional components.
- Use `useRef` for accessing DOM elements or storing mutable values across renders.
- Use `useCallback` for memoizing functions, especially when passing them as props to child components to prevent unnecessary re-renders.

In React's `useState` hook, `setCount` doesn't directly accept a callback function as an argument. Instead, you provide `useState` with an initial state value or a function that computes the initial state. After that, `setCount` is a function that allows you to update the state based on its current value or based on the previous state.

For example:

```jsx
const [count, setCount] = useState(0);

// Increment the count by 1 using the previous count value
setCount(prevCount => prevCount + 1);
```

In this code, `setCount` is used with a function that takes the previous count (`prevCount`) and returns the updated count (`prevCount + 1`). This is a common pattern when you want to update the state based on its previous value.

If you need to perform additional logic or side effects after the state has been updated, you can use other hooks like `useEffect` to achieve that. `useEffect` allows you to run code after a component renders and after state changes, which can be useful for handling side effects related to state updates.


# when to use curly double curly braces

- whenever passing an object in jsx.

Double curly braces (`{{ }}`) are used in React when you want to pass an object as a value for a prop or attribute that expects an object. This pattern is commonly seen in the `style` attribute for applying inline CSS styles, as demonstrated in the previous example.

Here are some situations where you would use double curly braces in React:

1. **Inline Styles (`style` attribute):** When applying inline styles to React components, you use double curly braces to pass an object containing CSS properties and their values. For example:
   ```jsx
   <div style={{ color: 'red', fontSize: '16px' }}>Styled Text</div>
   ```

2. **Event Handlers:** When passing an object as an argument to event handlers, such as `onClick`, `onChange`, etc., you use double curly braces. For instance:
   ```jsx
   <button onClick={() => handleClick({ id: 1, name: 'Button' })}>Click me</button>
   ```

3. **Passing Objects as Props:** If you have a component that expects an object as a prop, you use double curly braces to pass the object inline. For example:
   ```jsx
   <ChildComponent data={{ key: 'value', number: 123 }} />
   ```

4. **Setting State with Objects:** When updating state in React and passing an object to `setState`, you use double curly braces. For instance:
   ```jsx
   const [state, setState] = useState({ count: 0 });
   // Update state with an object using double curly braces
   setState({ count: state.count + 1 });
   ```

5. **Destructuring Props or State:** In functional components, when destructuring props or state, you might use double curly braces. For example:
   ```jsx
   const { prop1, prop2 } = props; // Destructuring props
   const { state1, state2 } = useState(initialState); // Destructuring state
   ```

In summary, double curly braces are used in React to indicate that you are passing an object literal as a value. This pattern is particularly common when dealing with inline styles, event handlers, passing objects as props, updating state with objects, and destructuring props or state.

# important points

- in button onclick takes function as a input.
