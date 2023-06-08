import React from 'react';
import '../styles/HowItWorkStyles.css';
import { useThemeHook } from '../context/ThemeProvider';
import {download,connectwallet,starttrading,profittrading} from '../assets/images'

const HowItWork = () => {

    const [theme] = useThemeHook();

  return (
      <section className={theme ? 'bg-dark-2 hiw-sec' : 'bg-light-2 hiw-sec'}>
          <div className='hiw-con'>
              <h1 className={theme ? 'text-white':'text-black'}>How It Works</h1>
             <p className={theme ? 'text-light-gray':'text-dark-gray'}>Stacks is a production-ready library of stackable
              content blocks built in React JS.</p> 
              <div className='hiw-boxes'>
              <div className='hiw-box'>
                  <div className='hiw-top'>
                      <img src={download}/>
                  </div>

                  <div className={theme ?'hiw-bottom text-light-gray':'hiw-bottom text-light-gray'}>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>STEP 1</p>
                      <h3 className={theme ? 'text-white':'text-black'}>Download</h3>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Stacks Is A Production-Ready Library Of Stackable
                          Content Blocks Built In React Native.</p>
                  </div>
                  </div>

                  <div className='hiw-box'>
                  <div className='hiw-top'>
                      <img src={connectwallet}/>
                  </div>

                  <div className={theme ?'hiw-bottom text-light-gray':'hiw-bottom text-light-gray'}>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>STEP 2</p>
                      <h3 className={theme ? 'text-white':'text-black'}>Connect Wallet
</h3>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Stacks Is A Production-Ready Library Of Stackable
                          Content Blocks Built In React Native.</p>
                  </div>
                  </div>

                  <div className='hiw-box'>
                  <div className='hiw-top'>
                      <img src={starttrading}/>
                  </div>

                  <div className={theme ?'hiw-bottom text-light-gray':'hiw-bottom text-light-gray'}>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>STEP 2</p>
                      <h3 className={theme ? 'text-white':'text-black'}>Start Trading
</h3>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Stacks Is A Production-Ready Library Of Stackable
                          Content Blocks Built In React Native.</p>
                  </div>
                  </div>
                 
                    
                  <div className='hiw-box'>
                  <div className='hiw-top'>
                      <img src={profittrading}/>
                  </div>

                  <div className={theme ?'hiw-bottom text-light-gray':'hiw-bottom text-light-gray'}>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>STEP 2</p>
                      <h3 className={theme ? 'text-white':'text-black'}>Profit Trading
</h3>
                      <p className={theme ? 'text-light-gray' : 'text-dark-gray'}>Stacks Is A Production-Ready Library Of Stackable
                          Content Blocks Built In React Native.</p>
                  </div>
                  </div>
              </div>
          </div>

      </section>
  )
}

export default HowItWork