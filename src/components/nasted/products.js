import React from 'react'
import {Link, Outlet} from 'react-router-dom'


// outlet is used for nasted Routes
 
const Products = () => {
  return (
    <>
    <div>
        <input type="search" name="" id="" placeholder='Search Products'  />
    </div>
    <nav>
    <Link to='featured' >Featured</Link>
    <Link to='new' >New Products</Link>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Products