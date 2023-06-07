import React, { useState } from 'react';
import { BiStar } from 'react-icons/bi';
import { useThemeHook } from '../context/ThemeProvider';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../styles/CoinSearchStyles.css';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const CoinItem = ({ coin }) => {
  const [theme] = useThemeHook();

  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, 'users', `${user?.email}`);

  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert('Please sign in to save a coin to your watch list');
    }
  };

  return (
    <tr className={theme ? 'text-white' : 'text-black'}>
      {/* Save coin button */}
      <td onClick={saveCoin}>
        <i className='star-icon'>
          {savedCoin ? <BiStar size={18} /> : <BiStar size={20} style{{color:'#ffa500
'}}/>}
        </i>
      </td>
      {/* Market cap rank */}
      <td>{coin.market_cap_rank}</td>
      {/* Coin details */}
      <td>
        <Link to={`/coin/${coin.id}`} className={theme ? 'text-white' : 'text-black'}>
          <div className={theme ? 'coin-image-name' : 'coin-image-name'}>
            <img src={coin.image} alt={coin.name} />
            <p>{coin.symbol}</p>
          </div>
        </Link>
      </td>
      {/* Coin name */}
      <td>{coin.name}</td>
      {/* Current price */}
      <td>${coin.current_price.toLocaleString()}</td>
      {/* Price change percentage in 24 hours */}
      <td className={coin.price_change_percentage_24h > 0 ? 'hour-gain' : 'hour-loss'}>
        {Number(coin.price_change_percentage_24h).toFixed(2)}%
      </td>
      {/* Market cap */}
      <td>${new Intl.NumberFormat().format(coin.market_cap)}</td>
      {/* Sparklines */}
      <td className='spark-lines'>
        {coin.price_change_percentage_24h > 0 ? (
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color='#58bd7d' />
          </Sparklines>
        ) : (
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color='#d33535' />
          </Sparklines>
        )}
      </td>
      {/* Trade button */}
      <td>
        <Link exact to={`/coin/${coin.id}`}>
          <button className={theme ? 'trade-btn text-white dark' : 'trade-btn text-black light'}>Trade</button>
        </Link>
      </td>
    </tr>
  );
}

export default CoinItem;
