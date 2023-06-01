import React from 'react';
import '../styles/AdvertStyles.css';
import {useThemeHook} from '../GlobalComponents/ThemeProvider'
import {Link} from 'react-router-dom';

const Advert = () => {

    const [theme] = useThemeHook();
  return (
    <section className={theme ? 'bg-dark-2 adver-sec' : 'primary-bg adver-sec'}>
        <div className='advert-con'>
            <div className='advert-flex'>
                <div className='ad-details'>
                    <h2 className={theme? 'text-white' :'text-white'}>Earn up to $25 worth of crypto</h2>
                    <p className={theme? 'text-light-gray' :'text-white'}>Discover How Specific Cryptocurrencies Work — And Get A Bit Of Each Crypto To Try Out For Yourself.</p>
                </div>

                <button>
                    <Link to='/'>
                    Create Account
                    </Link>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Advert