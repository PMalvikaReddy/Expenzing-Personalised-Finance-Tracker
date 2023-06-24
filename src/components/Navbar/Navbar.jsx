import React from 'react'
import {Link} from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logo} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
    
      <li className='p__opensans'><Link to ="/Main" style={{textDecoration:'none',color:'inherit'}}>Home Blogs</Link></li>
      <li className='p__opensans'><Link to="/About" style={{textDecoration:'none',color:'inherit'}}>AboutUs</Link></li>
      <li className='p__opensans'><Link to="/Contact" style={{textDecoration:'none',color:'inherit'}}>Contact</Link></li>
      <li className='p__opensans'><Link to="/Expense" style={{textDecoration:'none',color:'inherit'}}>Expense Tracker</Link></li>
    </ul>

   
  </nav>
  )
}

export default Navbar
