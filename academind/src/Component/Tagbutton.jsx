import React from 'react'

function Tagbutton({children , buttoncontainer}) {

// here we get default prop value of html element.which is buttoncontainer
// to use it we have to make sure that buttoncontainer shall be store in a variable with exact keyword and first letter should be capital.

const Buttoncontainer = buttoncontainer
  return (

    <Buttoncontainer>{children}</Buttoncontainer>
    
  )
}

export default Tagbutton
