import React from 'react';
import { useThemeHook } from '../context/ThemeProvider';
import CoinItem from '../components/CoinItem';
import Trending from '../components/Trending';
import Blog from './Blog';


const Explore = () => {
  const [theme] = useThemeHook();
  return (
    <div className={theme ? 'bg-dark':'bg-light'} style={{paddingTop:'5rem'}}>
        <Trending/>
        <Blog/>

    </div>
  )
}

export default Explore