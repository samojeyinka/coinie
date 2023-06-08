import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes}  from 'react-icons/fa';
import { useThemeHook } from '../context/ThemeProvider';
import {doc,onSnapshot, updateDoc} from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';
const SavedCoins = () => {

    const [coins, setCoins] = useState([]);
    const {user} = UserAuth()

    useEffect(()=>{
 onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
    setCoins(doc.data()?.watchList)
 }); 
    },[user?.email])

    const coinPath = doc(db,'users', `${user?.email}`)
    const deleteCoin = async (passedid) => {
        try{
            const result = coins.filter((item) => item.id !== passedid)
            await updateDoc(coinPath,{
                watchList: result
            })
        } catch(e){
            console.log(e.message)
        }
    }
  return (
    <div className='saved-coin'>
       {
        coins?.length === 0 ? 
        ( <p>You do not have any favourite coin in your watch list  <Link to='/'> Explore coins.</Link></p>) 
        : (
            <table>
                <thead>
                    <tr>
                        <td>Rank #</td>
                        <td>Coins</td>
                        <td>Remove</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        coins.map((coin) => (
                            <tr key={coin.id}>
                            <td>{coin?.rank}</td>
                            <td>
                                <Link to={`/coin/${coin.id}`}>
                                    <div className='img-coin'>
                                        <img src={coin?.image} alt='/'/>
                                    <p>{coin?.name}</p>
                                    </div>
                                </Link>
                            </td>
                                <FaTimes onClick={() => deleteCoin(coin.id)} style={{cursor:'pointer'}}/>
                            <td>

                            </td>
                        </tr>
                        ))
                    }
            
                </tbody>
            </table>
        )
       }
    </div>
  )
}

export default SavedCoins