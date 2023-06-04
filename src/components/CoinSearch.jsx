import React, { useState } from 'react';
import {useThemeHook} from '../GlobalComponents/ThemeProvider';
import '../styles/CoinSearchStyles.css'
import CoinItem from './CoinItem';
import { BiSearch } from 'react-icons/bi';
import CryptoNav from './CryptoNav';

const CoinSearch = ({coins}) => {

  const [theme] = useThemeHook();
  const [searchCoin, setSearchCoin] = useState('');
  
  return (
    <section className={theme ? 'bg-dark coins-sec':'bg-light coins-sec'}>
      <div className='coins-con'>
        <span className='top-flex'>
        <h1 className={theme ? 'text-white':'text-black'}>Market Update</h1>
        <form className={theme ? 'bg-secondary':'bg-light-2'}>
        <input className={theme ? 'text-white':'text-black'} type='text' placeholder='Search...' onChange={(evt) => setSearchCoin(evt.target.value)}/>
       <i className='search-icon'>
        <BiSearch size={25}/>
        </i>
      </form>
        </span>
        <CryptoNav/>
        <div className='coin-table-con'>
      <table>
        <thead>
          <tr className={theme ? 'text-light-gray dark':'text-dark-gray light'}>
          <th></th>
          <th>#</th>
          <th>Asset</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Market Cap</th>
          <th>Last 7 Days</th>
          <th></th>
          </tr>
        </thead>

        <tbody>
          {coins.filter((value)=>{
            if(searchCoin ===''){
              return value
            }

            else if(
              value.name.toLowerCase().includes(searchCoin.toLocaleLowerCase())
            ){
              return value
            }
          }).map((coin) => (
           <CoinItem key={coin.id} coin={coin}/>
          ))

          }
        </tbody>
      </table>
      </div>
      </div>
    </section>
  )
}

export default CoinSearch