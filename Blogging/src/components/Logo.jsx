import React from 'react'
import logo from '../assets/Logo.png'

function Logo({ className = '', width = '100px' }) 
{
  return (
    <div>
      <img src={logo} alt="Logo" className={className} style={{ width }} />
      </div>
  )
}

export default Logo