import React from 'react';
import './App.css';
import  {useThemeHook} from './GlobalComponents/ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BuyorSell from './pages/BuyorSell';
import Blog from './pages/Blog';
import Budget from './pages/Budget';
import Markets from './pages/Markets';
import Wallet from './pages/Wallet';


function App() {

  const [theme] = useThemeHook();

 
  return (
    <main className={theme ? 'bg-light-black' : 'bg-light'}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/crypto' element={<BuyorSell/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/budget' element={<Budget/>}/>
          <Route path='/markets' element={<Markets/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
        </Routes>
    </main>

  )
}

export default App;