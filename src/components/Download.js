import React from 'react';
import '../styles/DownloadStyles.css'
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import {miniHero,appStore,googlePlay} from '../assets/images';
import  {BiCheckCircle,BiCheck} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Download = () => {


    const [theme] = useThemeHook();
  return (
       

    <section className={theme ? 'bg-dark-2 dwl-sec' :'bg-light-2 dwl-sec'}>
<div className='dwl-con'>
    <div className='dwl-image'>
        <img src={miniHero} />
    </div>

    <div className='dwl-details'>
        <h1 className={theme ? 'text-white':'text-black'}>Free Your Money & Invest With Confident</h1>
        <p className={theme ? 'text-light-gray':'text-dark-gray'}>With Cryptor Trade, you can be sure your trading skills are matched

</p>

           <div className='feature'>
              <div className='f-flex'>
              <i className={theme ? 'text-black check-icon' :'check-icon text-white'}>
              <BiCheck size={20} style={{background:'var(--primary-color)',borderRadius:'50%'}}/>
              </i>
              <h3 className={theme ? 'text-white':'text-black'}>Buy, Sell, And Trade On The Go</h3>
           </div>
           <p className={theme ? 'text-light-gray':'text-dark-gray'}>Manage Your Holdings From Your Mobile Device</p>
           </div>

           <div className='feature'>
              <div className='f-flex'>
              <i className={theme ? 'text-black check-icon' :'check-icon text-white'}>
              <BiCheck size={20} style={{background:'var(--primary-color)',borderRadius:'50%'}}/>
              </i>
              <h3 className={theme ? 'text-white':'text-black'}>Take Control Of Your Wealth</h3>
           </div>
           <p className={theme ? 'text-light-gray':'text-dark-gray'}>Rest Assured You (And Only You) Have Access To Your Funds</p>
           </div>

            <div className='dwl-apps-flex'>
                <img src={googlePlay}/>
                <img src={appStore}/>

            </div>
       
    </div>
</div>
</section>
  )
}

export default Download