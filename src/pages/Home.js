import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import { useThemeHook } from '../context/ThemeProvider';
import HowItWork from '../components/HowItWork';
import About from '../components/About';
import Download from '../components/Download';
import Reviews from '../components/Reviews';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import CoinSearch from '../components/CoinSearch';
import Trending from '../components/Trending';

const Home = ({coins}) => {

  const [theme] = useThemeHook();
  return (
    <div className={theme? 'bg-dark' : 'bg-light'}>
      {/* <Header/> */}
      <Hero/>
      <Trending/>
      <CoinSearch coins={coins}/>
      <HowItWork/>
      <About/>
      <Download/>
      <Reviews/>
     
 
    </div>
  )
}

export default Home