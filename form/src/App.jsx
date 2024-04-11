import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [naam, setNaam] = useState({
    fname: "",
    lname: ""
  });

  const onSubmits = (event) => {
    event.preventDefault();
  };

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNaam((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>hello {naam.fname} {naam.lname}</h1>
          <input
            type='text'
            name="fname"
            placeholder='enter your name'
            value={naam.fname}
            onChange={InputEvent}
          />
          <input
            type='text'
            name="lname"
            placeholder='enter your lastname'
            value={naam.lname}
            onChange={InputEvent}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;



