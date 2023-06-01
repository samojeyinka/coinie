import React, { useState,useRef,useEffect } from 'react';
import '../styles/HeroStyles.css';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { partner1,partner2,partner3,partner4,heroImgLight } from '../assets/images';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [theme] = useThemeHook();

  const [width,setWidth] = useState(0);
        const partParent =useRef();

        useEffect(()=> {
                setWidth(partParent.current.scrollWidth - partParent.current.offsetWidth);
        },[]);

  return (
    <section className={theme ? 'hero-sec bg-dark-2' : 'hero-sec bg-light-2'}>

      <div className='hero-flex'>
        <div className='hero-content'>
          <h1 className={theme ? 'text-white' : 'text-black'}>Buy & Sell Digital Assets In The Coinie</h1>
          <p className={theme ? 'text-light-gray':'text-dark-gray'}>Coin coinie is the easiest, safest,
            and fastest way to buy & sell crypto asset exchange.</p>

            <button>
              <Link to='/'>
              Get started now
              </Link>
              </button>

            <h3 className={theme ? 'text-white' : 'text-black'}>Our partners</h3>
           <motion.div ref={partParent} className='partParent'>
            <motion.div className='inner-carousel' drag="x" dragConstraints={{right:0,left: -width}}>

            <motion.div className='partners'>
              <img src={partner1}/>
              <img src={partner2}/>
              <img src={partner3}/>
              <img src={partner4}/>
              <img src={partner2}/>
              <img src={partner3}/>
              <img src={partner4}/>

            </motion.div>
            </motion.div>
            </motion.div>

        </div>

        <div className='hero-image'>
              <img src={heroImgLight}/>
        </div>
      </div>

    </section>
  )
}

export default Hero