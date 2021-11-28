import React from 'react'
import { NavLink } from 'react-router-dom'


const MenuList = () => {
    return (
        <>
        <li className="menuListItem"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li className="menuListItem"><NavLink exact to="/product" activeClassName="active">Product</NavLink></li>
        {/* <li className="menuListItem"><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li> */}
        </>
    )
}

export default MenuList
