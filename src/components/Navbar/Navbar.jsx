import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to='/'>Home</Link></li>
        <li className="p__opensans"><Link to='/about'>About</Link></li>
        <li className="p__opensans"><Link to='/menu'>Menu</Link></li>
        <li className="p__opensans"><Link to='/blog'>Blog</Link></li>
        <li className="p__opensans"><Link to='/contact'>Contact</Link></li>
      </ul>

      <div className="app__navbar-login">
        <Link to='/reservation'>
          <button type="button" className="custom__button">Reservation</button>
        </Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="/menu" onClick={() => setToggleMenu(false)}>Menu</Link></li>
              <li><Link to="/blog" onClick={() => setToggleMenu(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
              <li className='app__navbar-smallscreen_links-reservation'>
                <Link to='/reservation'>
                  <button type="button" className="custom__button" onClick={() => setToggleMenu(false)}>Reservation</button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
