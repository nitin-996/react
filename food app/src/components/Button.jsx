
// using ...rest operator
function Button({textOnly, className,children , ...props }) {

    const styling = textOnly ? `text-button ${className} ` : `button ${className}`
  return (

    // if we send addition props like onClick={handleClick},type="button" etc that will comes through ...props 
    <button className={styling} {...props}>{children}</button>
  )
}

export default Button