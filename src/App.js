import React, { useEffect, useState } from 'react';
import './App.css';
import { useThemeHook } from './context/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BuyCrypto from './pages/BuyCrypto';
import Blog from './pages/Blog';
import Explore from './pages/Explore';
import Wallet from './pages/Wallet';
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import axios from 'axios';
import CoinPage from './pages/CoinPage';
import Advert from './components/Advert';
import ProfileEditor from './pages/ProfileEditor';
import { AuthContextProvider } from './context/AuthContext';


function App() {

  const  [coins,setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";
  
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
       console.log(response.data)
    });
  }, [url]);

  const [theme] = useThemeHook();

  

 
  return (
    <AuthContextProvider>
    <main className={theme ? 'bg-light-black' : 'bg-light'}>
      <Header/>
        <Routes>
          <Route path='/' element={<Home coins={coins}/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/buycrypto' element={<BuyCrypto/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/profile' element={<ProfileEditor/>}/>
          

          <Route path='/coin/:coinId' element={<CoinPage/>}>
            <Route path=':coinId'/>
          </Route>
        </Routes>
        <Advert/>
        <Footer/>
    </main>
    </AuthContextProvider>
  )
}

export default App;