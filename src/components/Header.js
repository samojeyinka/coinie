import React, { useContext, useEffect, useState } from 'react';
import '../styles/HeaderStyles.css';
import { Link } from 'react-router-dom';
import {BiMoon,BiSun} from 'react-icons/bi';
import {logo} from '../assets/images';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { BiMenu,BiX } from 'react-icons/bi';

const Header = () => {

    const { theme, setThemeMode } = useContext(ThemeContext); 
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



  return (
    <header className={darkMode ? 'bg-dark' : 'bg-light'} > 
        <nav>
            <div className='left-nav'>

                <Link to='/'>
                      <div className='logo-flex'>
                    <img src={logo} className='logo-img'/>
                    <span className={theme ? 'logo-text text-white': 'logo-text text-black'}>Coinie</span>
                </div>
                </Link>


            </div>
            <div className='center-nav'>
                <ul className={click ? 'nav-links active': 'nav-links'}>
                    <li><Link to='/'    className={theme ? 'text-white':'text-black'}>Home</Link></li>
                    <li><Link to='/crypto'  className={theme ? 'text-white':'text-black'}>Crypto</Link></li>
                    <li><Link to='/markets' className={theme ? 'text-white':'text-black'}>Markets</Link></li>
                    <li><Link to='/budget'  className={theme ? 'text-white':'text-black'}>Budget</Link></li>
                    <li><Link to='/blog'    className={theme ? 'text-white':'text-black'}>Blog</Link></li>
                    <li><Link to='/blog' className={theme ? 'text-white':'text-black'}>More</Link></li>
                </ul>

                

            </div>

        

            <div className='right-nav'>
                <span className='right-line'></span>
                <div className='theme-icons' onClick={()=> setDarkMode(!darkMode)}>

                    {darkMode ? 

                        <i className='fa-moon fa-icon text-white' ><BiMoon/></i>
                   

                            :

                            <i className='fa-sun fa-icon text-black'><BiSun/></i>
                    }
                </div>

                <div className={theme ? 'hamburger text-white': 'hamburger text-black'} onClick={handleClick}>


                    <div className={click ? 'bars-div open bar1 open bar2 open bar3' :'bars-div'}>
                    <div className={theme ? ' bar1 light ':'bar1 dark'}></div>
                    <div className={theme ? ' bar2 light ':'bar2 dark'}></div>
                    <div className={theme ? ' bar3 light ':'bar3 dark'}></div>

                </div>
                </div>
                <button className={theme ? 'wallet-btn dark-wallet-btn' : 'wallet-btn light-wallet-btn'}>
                    <Link to='/wallet' className={theme ? 'text-white':'text-black'}>Wallet</Link>
                </button>

            </div>
        </nav>
    </header>
    
  )
}

export default Header