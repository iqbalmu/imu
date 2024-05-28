import { ProfileImg } from '../../assets'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="profile-image">
        <img src={ProfileImg} alt="my profile photo" className='profile-img' />
      </div>
      <div className="nav-menu">
        <div className="title">
          <p>
          IMu
          </p>
          <span className='strip'></span>
        </div>
        <div className="menu">
          <Link to="/about" >About</Link>
          <Link to="/projects" >Projects</Link>
          <Link to="/contact" >Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar