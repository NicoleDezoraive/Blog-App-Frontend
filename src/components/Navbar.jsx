import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Logo from "../images/ourBlogLogo.png"

function Navbar() {
  const {currentUser, logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
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
            <span>{currentUser?.username}</span>
            {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
            {currentUser ? <span className='write'><Link className='link' to="/write">Write</Link></span> : ""}

        </div>
      </div>
    </div>
  )
}

export default Navbar
