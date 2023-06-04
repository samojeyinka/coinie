import React, { useEffect, useState,useRef } from 'react';
import {useThemeHook} from '../GlobalComponents/ThemeProvider';
import axios from 'axios';
import '../styles/TrendingStyles.css';
import { motion } from 'framer-motion';

const Trending = () => {

    const [theme] = useThemeHook();

    const [trending, setTrending]  = useState([]);

    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(()=>{
        axios.get(url).then((response)=> {
                setTrending(response.data.coins);
                console.log(response.data.coins)
        });
    },[url])


    //The carousel state 

    const [width,setWidth] = useState(0);
    const TrendingCon =useRef();
 
    useEffect(()=> {
            setWidth(TrendingCon.current.scrollWidth - TrendingCon.current.offsetWidth);
    },[]);

  return (
    <div className={theme ? 'trending bg-dark-2':'trending bg-light-2'}>
        <motion.div className='tred-con'  ref={TrendingCon}>
            <h1 className={theme ? 'text-white':'text-black'}>Trending🪙</h1>
        <motion.div className='flex-tred' drag='x' dragConstraints={{right:0, left:-width}}>

            {
                trending.map(coin=> (
                    <motion.div className={theme ? 'bg-secondary tred-box': 'bg-light tred-box'}>
                        <span className={theme ? 'text-white':'text-black'}>
                        #<span className='rank'>{coin.item.score}</span>
                        </span>
                        <div className='tred-flex-top'>
                           
                            <img src={coin.item.small}/>
                            <p className={theme ? 'text-white':'text-black'}>{coin.item.name}</p>
                            <small className={theme ? 'text-light-gray':'text-dark-gray'}>{coin.item.symbol}/BTC</small>
                        </div>

                        <div className='tred-flex-bottom'>
                            <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'/>
                            <h3 className={theme ? 'text-white':'text-black'}>{coin.item.price_btc.toFixed(6)}</h3>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Trending