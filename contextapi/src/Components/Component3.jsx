import React from 'react'
import { firstName } from '../App'

function Component3() {
  return (
    <>
      <firstName.Consumer>
        {(fname) => <h1>My name is monoto {fname}</h1>}
      </firstName.Consumer>
    </>
  );
}

export default Component3
