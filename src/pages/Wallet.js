import React, { useState } from 'react';
import SavedCoins from '../components/SavedCoins';
import {Navigate, useNavigate } from 'react-router-dom';
import {UserAuth,user } from '../context/AuthContext';
import '../styles/WalletStyles.css';


const Wallet = () => {

  const [user, logout] = useState();

const navigate = useNavigate();

const handleSignOut = async() => {

      try{
        logout()
        navigate('/')
      } catch(e) {
        console.log(e.message)
      }
}
  return (
    <section className='wallet-sec'>

  <div className='wallet-center'>
    <div className='wallet-flex'>
      <div>
      <h1>Wallet</h1>
      <p>welcome {user?.email}</p>
     
      </div>
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>

    <div>
      <div className='watchlist'>
        <h1>Watch List</h1>
        <SavedCoins/>
      </div>
    </div>


  </div>
    </section>
  )
}

export default Wallet