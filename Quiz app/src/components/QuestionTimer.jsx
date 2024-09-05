import { useState, useEffect } from "react";



/* Automatic Execution of Cleanup Functions
Component Unmounting:

When a React component is about to be removed from the DOM, React automatically calls the cleanup function for any useEffect hooks that were used in that component.
This ensures that resources like intervals, timeouts, and subscriptions are properly cleaned up to prevent memory leaks.
Effect Dependency Changes:

If a useEffect hook has dependencies (e.g., [Timeout, onTimeout]), React runs the cleanup function from the previous render before applying the new effect.
This ensures that the effect logic from the previous render is cleaned up before the new effect logic is applied.
How It Works

Setup: When the useEffect hook is first run (on mount or when dependencies change), the effect function is executed.

Cleanup: If the component unmounts or if the dependencies of the effect change, React runs the cleanup function.

No Manual Invocation Needed: You don’t need to manually call or manage the cleanup function; React takes care of this for you.*/

// progress bar code (component)
export default function QuestionTimer({ Timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(Timeout);

  useEffect(()=>{
    const removetime = setTimeout(onTimeout, Timeout);
console.log("timeout");

    return ()=>{clearTimeout(removetime)}

  },[Timeout,onTimeout])
  useEffect(() => {
   const interval =  setInterval(() => {
      setRemainingTime((preRemainingTime) => preRemainingTime - 100);
    }, 100);

    // this will be executed by react when components unmounted.
    return ()=>{
        clearInterval(interval)
    };
  }, []);

  return <progress id="questionTime" max={Timeout} value={remainingTime}/>;
}

// const [showProgress, setShowProgress] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowProgress(true); // Set the state to show the progress bar
//     }, Timeout); // 15 seconds

//     return () => clearTimeout(timer); // Cleanup the timeout on component unmount
//   }, []);

//   return (
//     <div>
//       {showProgress ? <progress id="question-time" /> : <p>Waiting for 15 seconds...</p>}
//     </div>
//   );
