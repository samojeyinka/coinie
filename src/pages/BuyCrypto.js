import React, { useState, useEffect } from 'react';
import '../styles/BuyCryptoStyles.css';
import { useThemeHook } from '../context/ThemeProvider';

const BuyCrypto = () => {
  const [theme] = useThemeHook();
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [buyAmount, setBuyAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    // Retrieve wallet data from local storage on component mount
    const savedWallet = localStorage.getItem('wallet');
    if (savedWallet) {
      setWallet(JSON.parse(savedWallet));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever wallet data changes
    localStorage.setItem('wallet', JSON.stringify(wallet));
  }, [wallet]);

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
  };

  const handleBuyAmountChange = (event) => {
    setBuyAmount(parseFloat(event.target.value));
  };

  const handleBuyCrypto = () => {
    if (selectedCrypto && buyAmount > 0) {
      const newCrypto = {
        crypto: selectedCrypto,
        amount: buyAmount,
      };

      setWallet((prevWallet) => [...prevWallet, newCrypto]);
      setMessage(`Successfully bought ${buyAmount} ${selectedCrypto}`);
    } else {
      setMessage('Please select a cryptocurrency and enter a valid buy amount.');
    }
  };

  return (
    <section className={theme ?'bg-dark text-white buycrypto-sec':' bg-light buycrypto-sec'}>
      <div className='buycrypto-con'>
        <div className='crypto-purchase'>
      <div className='crypto-board'>
        <label htmlFor="crypto">Select Crypto:</label>
        <select id="crypto" value={selectedCrypto} onChange={handleCryptoChange}>
        <option value="select">Select</option>
          <option value="BTC">Bitcoin</option>
          <option value="ETH">Ethereum</option>
          <option value="LTC">Litecoin</option>
          <option value="SHIB">Shiba</option>
          <option value="USDT">USDT</option>
        </select>
      </div>
      <div className='buy-trigger'>
        <label htmlFor="buyAmount">Buy Amount:</label>
        <input
          id="buyAmount"
          type="number"
          value={buyAmount}
          onChange={handleBuyAmountChange}
        />
        <button onClick={handleBuyCrypto}>Buy</button>
      </div>
       
      </div>
      <div className='crypto-balance'>
      <div>
        {message && <p>{message}</p>}
      </div>
      <div>
        <h2>Balance</h2>
        {wallet.length > 0 ? (
          <ul>
            {wallet.map((item, index) => (
              <li key={index}>
                {item.amount} {item.crypto}
              </li>
            ))}
          </ul>
        ) : (
          <p>No cryptocurrencies in the wallet.</p>
        )}
      </div>
      </div>
      </div>
    </section>
  );
};

export default BuyCrypto;