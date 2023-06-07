import React from 'react';
import '../styles/AboutStyles.css';
import { aboutimg, eth, usdt, btc, ex, dollar } from '../assets/images';
import { BiCheckCircle, BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useThemeHook } from '../context/ThemeProvider';

const About = () => {
    // Accessing the theme value from the theme hook
    const [theme] = useThemeHook();

    return (
        // Section containing the About information
        <section className={theme ? 'about-sec bg-dark' : 'about-sec bg-light'}>
            <div className='about-con'>
                {/* The big about image */}
                <div className='about-image'>
                    <img src={aboutimg} alt='About' />

                    {/* Small floating images */}
                    <div className='float-images'>
                        <img src={eth} className='float-img f-img-1' alt='Ethereum' />
                        <img src={btc} className='float-img f-img-2' alt='Bitcoin' />
                        <img src={ex} className='float-img f-img-3' alt='Exchange' />
                        <img src={dollar} className='float-img f-img-4' alt='Dollar' />
                        <img src={usdt} className='float-img f-img-5' alt='USDT' />
                    </div>
                </div>

                <div className='about-details'>
                    <h1 className={theme ? 'text-white' : 'text-black'}>What Is Coinie</h1>
                    <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>
                        Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
                        View real-time cryptocurrency
                    </p>

                    {/* Feature section 1 */}
                    <div className='feature'>
                        <div className='f-flex'>
                            {/* Check icon */}
                            <i className={theme ? 'text-black check-icon' : 'check-icon text-white'}>
                                <BiCheck size={20} style={{ background: 'var(--primary-color)', borderRadius: '50%' }} />
                            </i>
                            <h3 className={theme ? 'text-white' : 'text-black'}>View real-time cryptocurrency prices</h3>
                        </div>
                        <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>
                            Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade,
                            P2P, Staking, Mining, And Margin.
                        </p>
                    </div>

                    {/* Feature section 2 */}
                    <div className='feature'>
                        <div className='f-flex'>
                            {/* Check icon */}
                            <i className={theme ? 'text-black check-icon' : 'check-icon text-white'}>
                                <BiCheck size={20} style={{ background: 'var(--primary-color)', borderRadius: '50%' }} />
                            </i>
                            <h3 className={theme ? 'text-white' : 'text-black'}>Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
                        </div>
                        <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>
                            Experience A Variety Of Trading On Bitcost. You Can Use Various Types Of Coin Transactions Such As Spot Trade, Futures Trade,
                            P2P, Staking, Mining, And Margin.
                        </p>
                    </div>

                    {/* Explore more button */}
                    <button>
                        <Link to='/explore'>Explore More</Link>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;
