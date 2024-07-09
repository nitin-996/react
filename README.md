# react

- React project come with a build process that transforms jsxcode (behind the scene) to code that does work in the browser.
- component name should be capital letter and give a render object
- now under the hood instead of virtual dom now react use fiver.
[react fiber](https://github.com/acdlite/react-fiber-architecture)
- {} jsx in here if statements, for-loops , function definitons and other block statements are not allowed here. only expression that directly produce the value.
- [Import and Export](https://www.geeksforgeeks.org/reactjs-importing-exporting/)
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

### Rules of Hooks

1. **Only Call Hooks at the Top Level**
   - **Do not call Hooks inside loops, conditions, or nested functions.**

2. **Only Call Hooks from React Functions**
   - **Do not call hooks from regular JavaScript functions.**
   
# usestate

![workflow](react_topics/public/state.png)


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
  `useRef` is a React hook that provides a way to persist mutable values across renders without causing re-renders when the value changes. Unlike state variables (`useState`), changes to a `useRef` value do not trigger re-renders of components.

You should use `useRef` in the following situations:

 **Referencing DOM elements:** If you need to interact with DOM elements directly (e.g., focusing an input field, measuring an element), `useRef` can be used to create a reference to the DOM node.

   ```jsx
   import React, { useRef, useEffect } from 'react';

   const App = () => {
     const inputRef = useRef(null);

     useEffect(() => {
       inputRef.current.focus(); // Focuses the input element on initial render
     }, []);

     return <input ref={inputRef} />;
   };

   export default App;
   ```

 **Storing mutable values without triggering re-renders:** Since changes to `useRef` values don't cause re-renders, you can use it to store values that you don't want to trigger component updates. This is useful for values that need to persist across renders but don't affect the UI.

   ```jsx
   import React, { useRef, useState } from 'react';

   const App = () => {
     const renderCount = useRef(0);
     const [count, setCount] = useState(0);

     renderCount.current++; // Increment on every render

     return (
       <div>
         <p>Render count: {renderCount.current}</p>
         <p>Current count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   };

   export default App;
   ```

 **Storing and accessing previous values:** You can use `useRef` to store and access previous values of state or props, especially inside `useEffect` or event handlers.

   ```jsx
   import React, { useRef, useEffect } from 'react';

   const App = () => {
     const prevCountRef = useRef(null);
     const [count, setCount] = useState(0);

     useEffect(() => {
       prevCountRef.current = count; // Store previous value
     });

     const handleButtonClick = () => {
       console.log('Previous count:', prevCountRef.current); // Access previous value
       setCount(count + 1);
     };

     return (
       <div>
         <p>Current count: {count}</p>
         <button onClick={handleButtonClick}>Increment</button>
       </div>
     );
   };

   export default App;
   ```



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

- [conditional rendering](https://react.dev/learn/conditional-rendering)
- every event takes a function as input.
- In button onclick property takes function as a input.
- React router [navlink & Link](https://www.geeksforgeeks.org/link-and-navlink-components-in-react-router-dom/)

       `NavLink` and `Link` are components provided by React Router, a popular routing library for React applications. They serve similar purposes but have some differences in functionality:

- **Link**: This is a basic component used for declarative navigation in React Router. It's similar to an `<a>` tag in HTML but optimized for React Router. You use `Link` to navigate between different routes in your application. For example:
  ```jsx
  import { Link } from 'react-router-dom';

  const MyComponent = () => {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  };
  ```

- **NavLink**: This is a special version of `Link` that is used for navigation with additional features like styling the active link based on the current URL. `NavLink` allows you to specify CSS classes or styles that should be applied to the link when it matches the current URL. It's handy for creating navigation menus where you want to highlight the active link. Here's an example:
  ```jsx
  import { NavLink } from 'react-router-dom';

  const MyNavBar = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    );
  };
  ```

   In summary, `Link` is a basic component for navigation, while `NavLink` adds extra features like styling based on the active route. Use `Link` for simple navigation needs and `NavLink` when you want to style active links in your navigation menu.

- [useid hook](https://react.dev/reference/react/useId)

- don't use array index as keys bcz it degrade the react performance.

- The React Outlet component acts as a designated area within a parent route where child routes can be rendered. It essentially creates a placeholder for the content of child routes to be injected into the parent route's layout. 

- [react loader](https://reactrouter.com/en/main/route/loader)
- when you want to take data from local storage convert it into json and when u are saving data in local storage store it as string bcz it store data in string data type.means you have to parse in json when try to get and parse it in string when trying to store it.

# Redux, state and action are fundamental concepts that work together to manage your application's data:

* **State:**  This represents the current condition of your application at any given point in time. It's essentially a JavaScript object tree that stores all the data your application needs to function.  Imagine it as a snapshot of all the relevant information displayed on the screen and behind the scenes.

* **Action:**  This describes an event that happened in your application. It's a plain JavaScript object that signals the need for a state change.  Think of it as a message indicating something happened (like a button press, data fetched) and potentially including additional details (like the data itself). Actions typically have two key properties:
    * **type:**  A string that uniquely identifies the type of action (e.g., "userLoggedIn", "itemAddedToCart").
    * **payload (optional):**  Additional data associated with the action, if needed (e.g., the username for "userLoggedIn" or the item details for "itemAddedToCart").

* In Redux, an action is a plain JavaScript object that represents an intention to change the store’s state. Action objects must have a type property with a user-defined string value that describes the action being taken.

* Optional properties can be added to the action object. One common property added is conventionally called payload, which is used to supply data necessary to perform the desired action.    

Here's how they work together:

1. **Something happens in your application:** A user interacts with the UI (clicks a button, submits a form), or some asynchronous event occurs (data fetched from an API).
2. **An action is dispatched:**  The UI component or event handler creates an action object describing what happened. This action is then "dispatched" to the Redux store.
3. **Reducers update the state:** The Redux store holds the current state and a set of reducer functions. Each reducer is a pure function that takes the previous state and the dispatched action as arguments. Based on the action type, the reducer updates a specific part of the state immutably (without modifying the original state object) and returns a new state object.
4. **Components re-render:** The store notifies any connected components that the state has changed. These components re-render themselves based on the new state, reflecting the changes in the UI.

This unidirectional data flow (action -> reducer -> state update -> UI re-render) is a core principle of Redux, making it predictable and easier to debug your application's state changes.

- [react-redux](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)

- [redux toolkit docs](https://redux-toolkit.js.org/api/createSlice)

- [onsubmit](https://www.geeksforgeeks.org/react-onsubmit-event/) also takes event as input.
- [onchange](https://www.geeksforgeeks.org/react-onchange-event/)
- [map in redux use key concept](https://legacy.reactjs.org/docs/lists-and-keys.html)
- if you created the project with vite then there is diffrent method to access the env and same for nextjs, create react also.

- A collection in Appwrite is a logical grouping of documents, similar to a table in SQL or a collection in MongoDB.
Collections allow you to define a schema for the data they store, specifying fields and their data types.

- [forward ref](https://react.dev/reference/react/forwardRef) but we should not use it more bcz it directly manupulate the dom.

# `Ref` and `ForwardRef` are both related to handling references to React elements, but they serve different purposes.

1. **`Ref`**:
   - A `ref` is a way to reference a DOM element or a React component instance directly.
   - It's commonly used for accessing DOM elements or for managing focus, selection, or animations imperatively.
   - Example:

     ```jsx
     import React, { useRef, useEffect } from 'react';

     const MyComponent = () => {
       const inputRef = useRef(null);

       useEffect(() => {
         inputRef.current.focus();
       }, []);

       return <input ref={inputRef} />;
     };

     export default MyComponent;
     ```

   In this example, `inputRef` is a `ref` that allows us to focus on the input element imperatively using `inputRef.current.focus()`.

2. **`ForwardRef`**:
   - `ForwardRef` is used for passing refs through components to the underlying DOM elements or components.
   - It allows a component to take a `ref` prop and forward it to one of its children.
   - Example:

     ```jsx
     import React, { forwardRef, useRef, useImperativeHandle } from 'react';

     const InputComponent = forwardRef((props, ref) => {
       const inputRef = useRef(null);

       // Expose inputRef.current methods through the ref prop
       useImperativeHandle(ref, () => ({
         focus: () => {
           inputRef.current.focus();
         },
         getValue: () => inputRef.current.value,
       }));

       return <input ref={inputRef} />;
     });

     const MyParentComponent = () => {
       const inputRef = useRef(null);

       const handleClick = () => {
         inputRef.current.focus();
       };

       return (
         <>
           <InputComponent ref={inputRef} />
           <button onClick={handleClick}>Focus Input</button>
         </>
       );
     };

     export default MyParentComponent;
     ```

   Here, `InputComponent` is a functional component that uses `forwardRef` to forward the `ref` prop to its internal input element. The parent component (`MyParentComponent`) then uses this forwarded ref to call `focus` on the input element when a button is clicked.

In summary, `ref` is used for direct reference to DOM elements or components, while `ForwardRef` is used to pass and forward refs through component hierarchies, allowing you to interact with underlying DOM elements or components from a parent component.


# Closer Look: public/ vs assets/ for Image Storage

The public/ Folder
As shown in the previous lecture you can store images in the public/ folder and then directly reference them from inside your index.html or index.css files.

The reason for that is that images (or, in general: files) stored in public/ are made publicly available by the underlying project development server & build process. Just like index.html, those files can directly be visited from inside the browser and can therefore also be requested by other files.

If you try loading localhost:5173/some-image.jpg, you'll be able to see that image (if it exists in the public/ folder, of course).

The src/assets/ Folder
You can also store images in the src/assets/ folder (or, actually, anywhere in the src folder).

So what's the difference compared to public/?

Any files (of any format) stored in src (or subfolders like src/assets/) are not made available to the public. They can't be accessed by website visitors. If you try loading localhost:5173/src/assets/some-image.jpg, you'll get an error.

Instead, files stored in src/ (and subfolders) can be used in your code files. Images imported into code files are then picked up by the underlying build process, potentially optimized, and kind of "injected" into the public/ folder right before serving the website. Links to those images are automatically generated and used in the places where you referenced the imported images.

Which Folder Should You Use?
You should use the public/ folder for any images that should not be handled by the build process and that should be generally available. Good candidates are images used directly in the index.html file or favicons.

On the other hand, images that are used inside of components should typically be stored in the src/ folder (e.g., in src/assets/).