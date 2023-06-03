import React, { useEffect, useState } from 'react';
import './App.css';
import  {useThemeHook} from './GlobalComponents/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BuyorSell from './pages/BuyorSell';
import Blog from './pages/Blog';
import Budget from './pages/Budget';
import Markets from './pages/Markets';
import Wallet from './pages/Wallet';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';


function App() {

  const  [coins,setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";
  
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      //  console.log(response.data)
    });
  }, [url]);

  const [theme] = useThemeHook();

  

 
  return (
    <main className={theme ? 'bg-light-black' : 'bg-light'}>
      <Header/>
        <Routes>
          <Route path='/' element={<Home coins={coins}/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/crypto' element={<BuyorSell/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/budget' element={<Budget/>}/>
          <Route path='/markets' element={<Markets/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
        </Routes>
        <Footer/>
    </main>

  )
}

export default App;