import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import  {useThemeHook} from '../GlobalComponents/ThemeProvider';
import HowItWork from '../components/HowItWork';
import About from '../components/About';
import Download from '../components/Download';
import Reviews from '../components/Reviews';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
const Home = () => {

  const [theme] = useThemeHook();
  return (
    <div className={theme? 'bg-dark' : 'bg-light'}>
      <Header/>
      <Hero/>
      <HowItWork/>
      <About/>
      <Download/>
      <Reviews/>
      <Advert/>
      <Footer/>
    </div>
  )
}

export default Home