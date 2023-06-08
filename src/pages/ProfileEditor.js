import React, { useState, useEffect } from 'react';
import {avatar} from '../assets/images';
import '../styles/ProfileEditorStyles.css';
import { useThemeHook } from '../context/ThemeProvider';
import ProfileResult from '../components/ProfileResult';
import { Link } from 'react-router-dom';

const ProfileEditor = () => {

    const [theme] = useThemeHook ();


    const [profileImage, setProfileImage] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');


useEffect(()=>{
    const savedProfileInfo = JSON.parse(localStorage.getItem('profileInfo'));

    if(savedProfileInfo){
        setProfileImage(savedProfileInfo.profileImage);
        setFirstname(savedProfileInfo.firstname);
        setLastname(savedProfileInfo.lastname);
        setEmail(savedProfileInfo.email);
        setNumber(savedProfileInfo.number);
        setCountry(savedProfileInfo.country);
        setAge(savedProfileInfo.age);
    }


},[]);


useEffect(()=>{
    const profileInfo = {
        profileImage,
        firstname,
        lastname,
        email,
        number,
        country,
        age,
    };

    localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
    
},[profileImage,firstname,lastname,email,number,country,age]);

const handleProfilePhotoChange = (evt) =>{
   const  profilePhoto = evt.target.files[0];
    setProfileImage(URL.createObjectURL(profilePhoto));

}

    return (
        <div className={theme ? 'bg-dark profile-editor-sec' : 'bg-light profile-editor-sec'}>
            <div className='profile-editor-con'>
                <div className='profile-editor-flex'>

                    <div className='profile-result'>

                    <ProfileResult
                                profileImage={profileImage}
                                firstname={firstname}
                                lastname={lastname}
                                email={email}
                                number={number}
                                age={age}
                                country={country}
                                theme={theme}
                    
                    />
                    </div>

                    <div className='profile-edit'>
                        <h2 className={theme ? 'text-white':'text-black'}>Edit Profile</h2>
                        <h5 className={theme ? 'text-light-gray':'text-dark-gray'}>Personal Infomation</h5>

                        <form>
                            <div className='preview-image'>
                               {profileImage && <img src={profileImage}/>}
                                <label className={theme ? 'text-light-gray':'text-dark-gray'}>Choose Profile image</label>
                                <input
                                id='profileImage'
                                
                                accept='image/*'
                                onChange={handleProfilePhotoChange}
                                type='file' className='inputImage'/>
                            </div>
                            <div className='form-flex'>
                            <div className='form-left'>

                                <input type='text' placeholder='First name'
                                id='firstname'
                                value={firstname}
                                onChange={(evt) => setFirstname(evt.target.value)}
                                className={theme ? 'bg-dark-2 text-white':'bg-light-2 text-black'}/>


                                <input type='text' placeholder='Email Addrees'
                                id='email'
                                value={email}
                                onChange={(evt) => setEmail(evt.target.value)}
                                className={theme ? 'bg-dark-2 text-white':'bg-light-2 text-black'}/>

                                <input type='text' placeholder='Country' 
                                id='country'
                                value={country}
                                onChange={(evt) => setCountry(evt.target.value)}
                                className={theme ? 'bg-dark-2 text-white':'bg-light-2 text-black'}/>

                            </div>
                            <div className='form-right'>

                            <input type='text' placeholder='Last name'
                            id='lastname'
                                value={lastname}
                                onChange={(evt) => setLastname(evt.target.value)}
                            className={theme ? 'bg-dark-2 text-white':'bg-light-2 text-black'}/>


                                <input type='text' placeholder='Your phone number'
                                id='number'
                                value={number}
                                onChange={(evt) => setNumber(evt.target.value)}
                                className={theme ? 'bg-dark-2 text-white':'bg-light-2 text-black'}/>


                                <input type='text' placeholder='DD/MM/YY'
                                id='age'
                                value={age}
                                onChange={(evt) => setAge(evt.target.value)}
                                className={theme ? 'bg-dark-2 text-white':'bg-light-2 text-black'}/>
                            </div>
                            </div>

                             <Link to='/wallet'>
                            <button>Update Profile</button>
                            </Link>
                        </form>

                    </div>

              
            </div>
            </div>
        </div>
    );
};

export default ProfileEditor;