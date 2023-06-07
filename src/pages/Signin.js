import React,{useState} from 'react';
import '../styles/SignInStyles.css';
import { useThemeHook } from '../context/ThemeProvider';
import {BiLock,BiLockAlt,BiLockOpen,BiTargetLock} from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { signIn,UserAuth } from '../context/AuthContext';


const SignIn = () => {
    const [theme] = useThemeHook();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email,password)
      navigate('/wallet')
      
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (
    <section className={theme ? 'bg-dark login-sec':'bg-light login-sec'}>
        <div className='login-con'>
            <h1 className={theme ? 'text-white' : 'text-black'}>Login To Coinie</h1>
            <p className={theme ? 'text-light-gray':'text-dark-gray'}>Welcome back! Log In now to start trading</p>
            <span className='signin-link'>
                <BiLockOpen size={33} style={{color:'#fff',background:'#58bd7d',borderRadius:'50%',padding:'2px'}}/>
                <small className={theme ? 'text-white' : 'text-black'}><span>https://</span>accounts.coinie.com/signin</small>
            </span>


            <form onSubmit={handleSubmit}>
              <div>
              <label className={theme ? 'text-light-gray':'text-dark-gray'}>Email</label>
              <input type='email'
              onChange={(e) =>setEmail(e.target.value)}
              placeholder='Please fill in the email form'/>
              </div>
              <div>
              <label className={theme ? 'text-light-gray':'text-dark-gray'}>Password</label>
              <input type='password'
              onChange={(e) =>setPassword(e.target.value)}
              placeholder='Please enter a password'/>
              </div>
          
              <div>
                <button type='submit'>Login</button>
              </div>
              <div className='to-signup'>
                <p className={theme ? 'text-white' : 'text-black'}>Not A Member?</p>
                <Link to='/signup'>Register</Link>
              </div>
            </form>
        </div>
        
    </section>

    
  )
}

export default SignIn
