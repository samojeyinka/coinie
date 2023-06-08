import axios from 'axios';
import { useThemeHook } from '../context/ThemeProvider';
import React, { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../styles/CoinPageStyles.css';
import { FaTwitter,FaGithub,FaWhatsapp, FaLinkedin} from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';


const CoinPage = () => {
    

    const [theme] = useThemeHook();


    const [coin,setCoin] = useState({});

    const params = useParams();
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

    useEffect(()=>{
        axios.get(url).then((response) =>{
            setCoin(response.data);
            console.log(response.data);
        })
    },[url])

  return (
    <div className={theme ? 'coinpage-sec bg-dark': 'coinpage-sec bg-light'}>
         <div className={theme ? 'coinpage-con bg-dark-2': 'coinpage-con bg-light-2'}>
            <div className='coin-details'>
                <div className='top-details'>
                    <img src={coin.image?.large} className='coin-logo'/>
                    <span className={theme ? 'text-white':'text-black'}>
                        <h3>{coin?.name} price</h3>
                        <p>{coin.symbol?.toUpperCase()}/USD</p>
                    </span>
                </div>

                
                <div className='middle-details'>
                    <div className='m-left-details'>
                    <div className='middle-price'>
                <h3 className={theme ? 'text-white':'text-black'}>{coin.market_data?.current_price ?
                 (<h3>${coin.market_data?.current_price.usd.toLocaleString()}</h3>) 
                 :
                  null}</h3>
                  <p className={theme ? 'text-white':'text-black'}>7D</p>
                  </div>

                  <div className='middle-sparklines'>
                   
                    <Sparklines data={coin.market_data?.sparkline_7d.price}>
                        <SparklinesLine color='teal'/>
                    </Sparklines>
                    </div>
                

                  <div className='market-cap'>
                        <div className='mrkt-cap-flex'>
                    <div className='mrkt-cap-left'>
                        <span>
                        <p className={theme ? 'text-light-gray':'text-dark-gray'}>Market Cap</p>
                        <p className={theme ? 'text-white':'text-black'}>{coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}</p>
                        </span>

                        <span>
                        <p className={theme ? 'text-light-gray':'text-dark-gray'}>24h High</p>
                        <p className={theme ? 'text-white':'text-black'}>{coin.market_data?.high_24h ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>) : null}</p>
                        </span>

                    </div>


                    <div className='mrkt-cap-right'>

                    <span>
                        <p className={theme ? 'text-light-gray':'text-dark-gray'}> Volume - 24h</p>
                        <p className={theme ? 'text-white':'text-black'}>{coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}</p>
                        </span>
                        <span>
                        <p className={theme ? 'text-light-gray':'text-dark-gray'}>24h Low</p>
                        <p className={theme ? 'text-white':'text-black'}>{coin.market_data?.low_24h ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>) : null}</p>
                        </span>

                    </div>
                        </div>
                  </div>

                </div>
                <div className='m-right-details'>
                    <h3 className={theme ? 'text-white':'text-black'}>Market Stats</h3>
                    <div className='mrkt-stat-flex'>
                        <div className='mrkt-stat-left'>
                            <span>
                                <p className={theme ? 'text-light-gray':'text-dark-gray'}>Market Rank</p>
                                <p className={theme ? 'text-white':'text-black'}>{coin.market_cap_rank}</p>
                            </span>

                            <span>
                                <p className={theme ? 'text-light-gray':'text-dark-gray'}>Price Change (24h)</p>
                                {coin.market_data ? (<p className={theme ? 'text-white':'text-black'}>{coin.market_data.price_change_percentage_24h.toFixed(2)}</p>) : null}
                            </span>
                            <span>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'}>Price Change (30d)</p>
                                {coin.market_data ? (<p className={theme ? 'text-white':'text-black'}>{coin.market_data.price_change_percentage_30d.toFixed(2)}</p>) : null}
                            </span>

                        </div>
                        <div className='mrkt-stat-middle'>
                        <span>
                                <p className={theme ? 'text-light-gray':'text-dark-gray'}>Hashing Algorithm</p>
                                {coin.hashing_algorithm ? <p className={theme ? 'text-white':'text-black'}>{coin.hashing_algorithm}</p> : null }
                    
                            </span>
                            <span>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'}>Price Change (7d)</p>
                                {coin.market_data ? (<p className={theme ? 'text-white':'text-black'}>{coin.market_data.price_change_percentage_7d.toFixed(2)}</p>) : null}
                            </span>
                            <span>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'}>Price Change (60d)</p>
                                {coin.market_data ? (<p className={theme ? 'text-white':'text-black'}>{coin.market_data.price_change_percentage_60d.toFixed(2)}</p>) : null}
                            </span>
                        </div>

                        <div className='mrkt-stat-right'>

                        <span>
                                <p className={theme ? 'text-light-gray':'text-dark-gray'}>Trust Score</p>
                                {coin.tickers? <p className={theme ? 'text-white':'text-black'}>{coin.liquidity_score.toFixed(2)}</p> : null}
                            </span>
                            <span>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'}>Price Change (14d)</p>
                                {coin.market_data ? (<p className={theme ? 'text-white':'text-black'}>{coin.market_data.price_change_percentage_14d.toFixed(2)}</p>) : null}
                            </span>
                            <span>
                            <p className={theme ? 'text-light-gray':'text-dark-gray'}>Price Change (1y)</p>
                                {coin.market_data ? (<p className={theme ? 'text-white':'text-black'}>{coin.market_data.price_change_percentage_1y.toFixed(2)}</p>) : null}
                            </span>
                        </div>

                    </div>

                    
        <div className='coin-links'>
        <a href="https://github.com/samojeyinka" target='_blank'><FaGithub/></a>
        <a href="https://linkedin.com/in/ojeyinka-samuel-02406125a" target='_blank'><FaLinkedin/></a>
        <a href="https://wa.me/2348122624063" target='_blank' className='f_social_icon'><FaWhatsapp/></a>
        <a href="https://twitter.com/sam_ojeyinka" target='_blank' className='f_social_icon'><FaTwitter/></a>
       
       </div>
                </div>
                </div>

                {/* ======The coin description======= */}

                <div className='about-coin'>
                    <h3 className={theme ? 'text-white':'text-black'}>About {coin.name}</h3>
                    <p className={theme ? 'text-light-gray':'text-dark-gray'} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>

                </div>
            </div>
         </div>
    </div> 

  );
};

export default CoinPage