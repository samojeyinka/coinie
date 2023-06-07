import React, { useState,useRef,useEffect } from 'react';
import '../styles/ReviewsStyles.css';
import { useThemeHook } from '../context/ThemeProvider';
import {pro1,pro2,pro3} from '../assets/images';
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa';
import { motion } from 'framer-motion';


const Reviews = () => {
   const [theme] = useThemeHook();

   const [width,setWidth] = useState(0);
   const revCon =useRef();

   useEffect(()=> {
           setWidth(revCon.current.scrollWidth - revCon.current.offsetWidth);
   },[]);

 
  return ( 
    <section className={theme?'bg-dark review-sec' : 'bg-light review-sec'}>
      <div className='review-con'>
      <div className='rev-left'>
       <h1 className={theme ? 'text-white':'text-black'}>Our Customers Love What We Do</h1>
       <h3 className={theme ? 'text-white':'text-black'}>Transform Your idea into Reality With Finsweet</h3>
       <p className={theme ? 'text-light-gray':'text-dark-gray'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable 
        Content Of A Page When Looking At Its Layout.</p>

        <div className='profile-pics-flex'>
            <img src={pro1}/>
            <img src={pro2}/>
            <img src={pro3}/>

        </div>

        <h4 className={theme ? 'text-white':'text-black'}><span>30+ </span> Customer Reviews</h4>
      </div>

      <div className='rev-right'>
        <motion.div className='rev-con' ref={revCon}>
          <motion.div className='rev-carousel'drag='x'dragConstraints={{right:0, left: -width}}>
             <motion.div className={theme ? 'bg-secondary rev-box': 'bg-light-2 rev-box'}>
                    <i className={theme ? 'text-white qoutation':'text-black qoutation'}>
                    <FaQuoteLeft size={40} style={{color:'var(--primary-color)'}}/>
                    </i>
                    
                    
                   <h2 className={theme ? 'text-white':'text-black'}>"I stumbled upon this crypto website 
                    and it's been a game-changer! The user 
                    interface is intuitive, making it easy to 
                    navigate through the world of cryptocurrencies.
                     The security measures are top-notch. Highly recommend!"</h2>

                    <div className='bottom-flex'>
                        <div className='profile-det'>
                            <img src={pro1}/>
                            <span className='profile-det-flex'>
                            <h4 className={theme ? 'text-light-gray':'text-dark-gray'}>Kunle Igala</h4>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'} >Blockchain Developer</p>
                            </span>
                        </div>
                        <h5 className={theme ? 'text-light-gray':'text-dark-gray'}>Lagos,Nigeria</h5>
                    </div>
             </motion.div>

             <motion.div className={theme ? 'bg-secondary rev-box': 'bg-light-2 rev-box'}>
                    <i className={theme ? 'text-white qoutation':'text-black qoutation'}>
                    <FaQuoteLeft size={40} style={{color:'var(--primary-color)'}}/>
                    </i>
                    
                    
                   <h2 className={theme ? 'text-white':'text-black'}>"As a crypto enthusiast, I've tried numerous websites,
                    but this one stands out. The platform offers a wide range of coins to trade,resolving any issues promptly. A reliable choice for all your crypto needs!"</h2>

                    <div className='bottom-flex'>
                        <div className='profile-det'>
                            <img src={pro2}/>
                            <span className='profile-det-flex'>
                            <h4 className={theme ? 'text-light-gray':'text-dark-gray'}>MCagabakin</h4>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'} >crypto enthusiast</p>
                            </span>
                        </div>
                        <h5 className={theme ? 'text-light-gray':'text-dark-gray'}>Oja oba,Texas</h5>
                    </div>
             </motion.div>

             <motion.div className={theme ? 'bg-secondary rev-box': 'bg-light-2 rev-box'}>
                    <i className={theme ? 'text-white qoutation':'text-black qoutation'}>
                    <FaQuoteLeft size={40} style={{color:'var(--primary-color)'}}/>
                    </i>
                    
                    
                   <h2 className={theme ? 'text-white':'text-black'}>
                   "I've finally found a crypto website that meets my expectations. The website's design is sleek and modern, providing a seamless trading experience.
                    The educational resources available are comprehensive!"
                   </h2>
                    <div className='bottom-flex'>
                        <div className='profile-det'>
                            <img src={pro3}/>
                            <span className='profile-det-flex'>
                            <h4 className={theme ? 'text-light-gray':'text-dark-gray'}>connor krex</h4>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'} >Technicalist</p>
                            </span>
                        </div>
                        <h5 className={theme ? 'text-light-gray':'text-dark-gray'}>Yekemi off Dubai</h5>
                    </div>
             </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Reviews
