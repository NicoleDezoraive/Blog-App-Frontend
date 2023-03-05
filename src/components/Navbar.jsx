import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/ourBlogLogo.png"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <div className='links'>
            <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
            <Link className='link' to="/?cat=sience"><h6>SIENCE</h6></Link>
            <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
            <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
            <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link>
            <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
            <Link className='link' to="/?cat=health"><h6>HEALTH</h6></Link>
            <Link className='link' to="/?cat=fashion"><h6>FASHION</h6></Link>
            <Link className='link' to="/?cat=religion"><h6>RELIGION</h6></Link>
            <Link className='link' to="/?cat=career"><h6>CAREER</h6></Link>
            <span>Nicole</span>
            <span>Logout</span>
            <span className='write'><Link className='link' to="/write">Write</Link></span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
