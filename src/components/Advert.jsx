import React from 'react';
import '../styles/AdvertStyles.css';
import { useThemeHook } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';

// Advert section component
const Advert = () => {
    // Accessing the theme value from the theme hook
    const [theme] = useThemeHook();

    return (
        // Section containing the advertisement before the footer section
        <section className={theme ? 'bg-dark-2 adver-sec' : 'primary-bg adver-sec'}>
            <div className='advert-con'>
                <div className='advert-flex'>
                    <div className='ad-details'>
                        {/* Title of the advertisement */}
                        <h2 className={theme ? 'text-white' : 'text-white'}>
                            Earn up to $25 worth of crypto
                        </h2>
                        {/* Description of the advertisement */}
                        <p className={theme ? 'text-light-gray' : 'text-white'}>
                            Discover How Specific Cryptocurrencies Work — And Get A Bit Of Each Crypto To Try Out For Yourself.
                        </p>
                    </div>

                    {/* Button to create an account */}
                    <button>
                        <Link to='/signup'>
                            Create Account
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Advert;
