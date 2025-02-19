import React from 'react'
import "./Logo.css"
import { logo } from '../../assets'

const Logo = () => {
  return (
    <div className='logo'> 
    <div className="icon__container">
        <img src={logo} alt="logo" />
    </div>
    <h1 className="name">Jn<span>Csc</span></h1>
    </div>
  )
}

export default Logo