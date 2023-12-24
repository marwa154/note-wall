import React from 'react'
import './button.css'
export default function Button({title,handleClick}) {
  return (
    <button onClick={handleClick} className="Button">{title}</button>
  )
}
