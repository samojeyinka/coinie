import React, { useContext, useEffect, useState, useRef } from 'react';
import '../styles/HeaderStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiMoon, BiSun } from 'react-icons/bi';
import { logo } from '../assets/images';
import { useThemeHook, ThemeContext } from '../context/ThemeProvider'
import { BiMenu, BiX } from 'react-icons/bi';
import { UserAuth } from '../context/AuthContext';

const Header = () => {

  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode)
  }, [darkMode]);


  //Trigger the click function for the mobile menu bar

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //This makes the menubar to disappear after clicking any link on the menu

  const openPage = () => {
    setClick(!click);
  }

  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(!open)



  //This is the drop down usestate

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });

  //This makes the signout possible and hide the the wallet page to users that are not logged in

  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };


  return (
    <header className={darkMode ? 'bg-dark' : 'bg-light'} ref={menuRef}>
      <nav>
        <div className='left-nav'>

          <Link to='/'>
            <div className='logo-flex'>
              <img src={logo} className='logo-img' />
              <span className={theme ? 'logo-text text-white' : 'logo-text text-black'}>Coinie</span>
            </div>
          </Link>


        </div>
        <div className='center-nav'>
          <ul className={click ? 'nav-links active' : 'nav-links'}>
            <li><Link to='/' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>Home</Link></li>
            <li><Link to='/buycrypto' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>Buy Crypto</Link></li>
            <li><Link to='/explore' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>Explore</Link></li>
            <li><Link to='/blog' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>Blog</Link></li>

            {/* The dropdown area */}
            <li><Link
              onClick={() => { setOpen(!open) }}
              className={theme ? 'text-white' : 'text-black'}>Account</Link></li>

            <div className={`dropdown-menu ${open ? 'opendropdown' : 'closedropdown'}`}>
              <ul>
                <li onClick={closeMenu}><Link to='/signup' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>Register</Link></li>
                <li onClick={closeMenu}><Link to='/signin' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>Login</Link></li>
                <li onClick={closeMenu}><Link to='/profile' className={theme ? 'text-white' : 'text-black'} onClick={openPage}>User Profile</Link></li>
              </ul>
            </div>
          </ul>

        </div>



        <div className='right-nav'>
          <span className='right-line'></span>
          <div className='theme-icons' onClick={() => setDarkMode(!darkMode)}>

            {darkMode ?

              <i className='fa-moon fa-icon text-white' ><BiMoon /></i>


              :

              <i className='fa-sun fa-icon text-black'><BiSun /></i>
            }
          </div>

          <div className={theme ? 'hamburger text-white' : 'hamburger text-black'} onClick={handleClick}>


            <div className={click ? 'bars-div open bar1 open bar2 open bar3' : 'bars-div'}>
              <div className={theme ? ' bar1 light ' : 'bar1 dark'}></div>
              <div className={theme ? ' bar2 light ' : 'bar2 dark'}></div>
              <div className={theme ? ' bar3 light ' : 'bar3 dark'}></div>

            </div>
          </div>

          {
            user?.email ? (<button className={theme ? 'wallet-btn dark-wallet-btn' : 'wallet-btn light-wallet-btn'}>
              <Link to='/wallet' className={theme ? 'text-white' : 'text-black'}>Wallet</Link>
            </button>) : (<li><Link to='/signin' className={theme ? 'text-white' : 'text-black'} style={{fontWeight:'600'}}>Login</Link></li>)
          }


        </div>
      </nav>


    </header>

  )
}

export default Header
