import React from 'react'

function ButtonComp({children , label ,isSelect , onSelect}) {
  return (
    <button className={isSelect ? 'bg-orange-100' : 'bg-sky-500' } type='submit' 
    onClick={onSelect}
    >
      {label}
    {children}
    </button>
  )
}

export default ButtonComp