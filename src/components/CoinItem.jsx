import React from 'react';
import {BiStar} from 'react-icons/bi';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import '../styles/CoinSearchStyles.css';


const CoinItem = ({coin}) => {

    const [theme] = useThemeHook();
  return (
      <tr className={theme ? 'text-white':'text-black'}>
          <td>
            <i className='star-icon'>
            <BiStar size={18}/>
            </i>
            </td>
          <td>{coin.market_cap_rank}</td>
          <td>
              <div className={theme ? 'coin-image-name' : 'coin-image-name'}>
                  <img src={coin.image} alt={coin.name} />
                  <p>{coin.symbol}</p>
              </div>
          </td>
          <td>{coin.name}</td>
          <td>
            ${coin.current_price.toLocaleString()}
            </td>
            <td className={ coin.price_change_percentage_24h > 0 ? 'hour-gain': 'hour-loss'}>{Number(coin.price_change_percentage_24h).toFixed(2)}</td>
          <td>${
            new Intl.NumberFormat().format(coin.market_cap)}</td>
          <td className='spark-lines'>
            {
                coin.price_change_percentage_24h > 0 ?
            
            <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine color='#58bd7d'/>
            </Sparklines>

            :
                
            <Sparklines data={coin.sparkline_in_7d.price}>
                <SparklinesLine color='#d33535'/>
            </Sparklines>
            }
          </td>

          <td>
            <button className={theme ? 'trade-btn text-white dark' : 'trade-btn text-black light'}>Trade</button>
          </td>
      </tr>
  );
}

export default CoinItem