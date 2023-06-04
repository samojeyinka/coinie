import React from 'react';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import '../styles/CryptoNavStyles.css';
import {Link} from 'react-router-dom';

const CryptoNav = () => {

    const [theme] = useThemeHook();

  return (
    <div className='crypto-nav'>
        <ul>
            <li><Link to='/'  className={theme ? 'text-white active-tab':'text-black active-tab'}>View All</Link></li>
            <li><Link to='/' className={theme ? 'text-white':'text-black'}>Metaverse</Link></li>
            <li><Link to='/' className={theme ? 'text-white':'text-black'}>Entertainment</Link></li>
            <li><Link to='/' className={theme ? 'text-white':'text-black'}>Energy</Link></li>
            <li><Link to='/' className={theme ? 'text-white':'text-black'}>NFT</Link></li>
            <li><Link to='/' className={theme ? 'text-white':'text-black'}>Gaming</Link></li>
            <li><Link to='/' className={theme ? 'text-white':'text-black'}>Music</Link></li>
        </ul>
    </div>
  )
}

export default CryptoNav