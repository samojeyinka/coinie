import React from 'react';
import '../styles/FooterStyles.css';
import { logo } from '../assets/images';
import { Link } from 'react-router-dom';
import { useThemeHook } from '../context/ThemeProvider';
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';


//The footer section

const Footer = () => {
  const [theme] = useThemeHook();
  return (
    <section className={theme ? 'footer-sec bg-dark' : 'footer-sec bg-light'}>
      <div className={theme ? 'footer-con dark' : 'footer-con light'}>
        <div className='footer-left'>
          <Link to='/'>
            <div className='f-logo-flex'>
              <img src={logo} className='f-logo-img' />
              <span className={theme ? 'f-logo-text text-white' : 'f-logo-text text-black'}>Coinie</span>
            </div>
          </Link>

          <h2 className={theme ? 'text-white' : 'text-black'}>Let's talk! 🤙</h2>
          <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>+2349131710995</p>
          <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Samuelojeyinka@gmail.com</p>
          <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Osogbo,Osun State.Nigeria</p>
        </div>

        <div className='footer-middle'>
          <div className='products'>
            <h5 className={theme ? 'text-white' : 'text-black'}>Products</h5>
            <ul>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Spot</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Inverse Perpetual</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>USDT Perpetual</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Exchange</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Lunchpad</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Binance Pay</Link> </li>

            </ul>
          </div>

          <div className='services'>
            <h5 className={theme ? 'text-white' : 'text-black'}>Services</h5>
            <ul>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>BUy Crypto</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Markets</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Trading Fee</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Affiliate Program</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>Referral Program</Link> </li>
              <li><Link to='/' className={theme ? 'text-white' : 'text-black'}>API</Link> </li>

            </ul>
          </div>


        </div>

        <div className='footer-right'>
          <h2 className={theme ? 'text-white' : 'text-black'}>Newsletters</h2>
          <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Subscribe Our Newsletter
            To Get More Free Design Course And Resource.</p>
          <form className='f-form'>
            <input type='text' placeholder='Enter Your Email' />
            <button type='submit'>Submit</button>
          </form>
          {/* The footer icon links that direct to my personal profile on social medias,meet me there */}
          <div className='f-links'>
            <a href="https://github.com/samojeyinka" target='_blank'><FaGithub className={theme ? 'text-white f_social_icon' : 'text-black f_social_icon'} /></a>
            <a href="https://linkedin.com/in/ojeyinka-samuel-02406125a" target='_blank' className='f_social_icon'><FaLinkedin className={theme ? 'text-white f_social_icon' : 'text-black f_social_icon'} /></a>
            <a href="https://wa.me/2348122624063" target='_blank' className='f_social_icon'><FaWhatsapp className={theme ? 'text-white f_social_icon' : 'text-black f_social_icon'} /></a>
            <a href="https://twitter.com/sam_ojeyinka" target='_blank' className='f_social_icon'><FaTwitter className={theme ? 'text-white f_social_icon' : 'text-black f_social_icon'} /></a>

          </div>


        </div>
      </div>
      <p className={theme ? 'text-light-gray copyRight' : 'text-light-gray copyRight'}>©2023 Coinie.Com. All Rights Reserved. Terms Of Service | Privacy Terms</p>
      <p className={theme ? 'text-light-gray copyRight' : 'text-light-gray copyRight'}>Developed by : Sam Ojeyinka | Frontend Developer</p>
    </section>
  )
}

export default Footer
