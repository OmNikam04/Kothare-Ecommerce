import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {ShoppingCart, AccountBox, Search, Home} from "@material-ui/icons"
import {Inventory, ContactPhone, Info} from "@mui/icons-material"

const Navbar = () => {
  return (
    <>
    <div className="menu-wrap">
		<input type="checkbox" className="toggler"/>
		<div className="hamburger">
			<div></div>
		</div>
		<div className="menu">
			<div>
				<div>
					<ul>
						<li><Link to="/"><Home/>Home</Link></li>
						<li><Link to="/products"><Inventory/>Products</Link></li>
						<li><Link to="/about"><Info/>About Us</Link></li>
						<li><Link to="/contact"><ContactPhone/>Contact Us</Link></li>
						<li><Link to="/search"><Search/>Search</Link></li>
						<li><Link to="/cart"><ShoppingCart/>Cart</Link></li>
						<li><Link to="/login"><AccountBox/>Login</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </>
  )
}

export default Navbar