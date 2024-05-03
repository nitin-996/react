import React from 'react'

function Button({
    childern,
    type = "button",
    bgcolor = "bg-blue-600",
    textColor = 'text-white',
    className = '',
    ...props

}) {
  return (
<Button className={`px-4 py-2 rounded-ss-lg ${bgcolor} ${textColor} ${className}`} {...props}>
    {childern}
</Button>
  )
}

export default Button