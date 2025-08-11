
function Button({textOnly, className,children , ...props }) {

    // if we send addition props like onClick,type that will comes through ...props
    const styling = textOnly ? `text-button ${className} ` : `button ${className}`
  return (
    <button className={styling} {...props}>{children}</button>
  )
}

export default Button