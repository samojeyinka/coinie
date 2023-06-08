import React from 'react';
import {BiPencil,BiEnvelope,BiPhoneCall,BiLocationPlus,BiCalendar} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const ProfileResult = ({profileImage, firstname, lastname, email, number, age, country, theme }) => {
    
  return (
    <div className='profile-result-center'>
    <div className='profile-image'>
               {profileImage && <img src={profileImage}/>}
            </div>
            <h3 className={theme ? 'text-white':'text-black'}>{firstname} {lastname}</h3>
            <p className={theme ? 'text-light-gray':'text-dark-gray'}><BiEnvelope size={20}/><span>{email}</span></p>
            <p className={theme ? 'text-light-gray':'text-dark-gray'}><BiPhoneCall size={20}/><span>{number}</span></p>
            <p className={theme ? 'text-light-gray':'text-dark-gray'}><BiCalendar size={20}/><span>{age}</span></p>
            <p className={theme ? 'text-light-gray':'text-dark-gray'}><BiLocationPlus size={20}/><span>{country}</span></p>
            <Link to='/budget'>
            <button><p>Edit</p><BiPencil size={20}/></button>
            </Link>

    </div>
  )
}

export default ProfileResult