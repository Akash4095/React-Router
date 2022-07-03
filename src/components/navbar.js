import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './navbar.css'

// NavLink specifies which is active link 

const Navbar = () => {
  return (
    <nav>
        {/* <Link to='/' >Home</Link> 
        <Link to='/about' >About</Link> */}

        <NavLink to='/' >Home</NavLink> 
        <NavLink to='/about' >About</NavLink>
    </nav>
  )
}

export default Navbar