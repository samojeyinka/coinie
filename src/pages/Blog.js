import React from 'react';
import CryptoNav from '../components/CryptoNav';
import { postimg1,postimg2,postimg3,postimg4,postimg5,postimg6,pro1,pro2,pro3} from '../assets/images';
import '../styles/BlogStyles.css';
import { useThemeHook } from '../context/ThemeProvider';

const Blog = () => {

  const [theme] = useThemeHook();

 const blogArray = [
  {
    id:1,
    postThumnail:postimg1 ,
    postCategory:'Saving & Trading',
    postTitle:'The best decision you can make today is start today on coinie',
    authorImage:pro1,
    authorName:'David Jackson',
    datePub:'Jun 07, 2023',
  },


  {
    id:2,
    postThumnail:postimg2 ,
    postCategory:'Blockchain Security',
    postTitle:'Coinie is the most secure and reliable crypto platform you can find',
    authorImage:pro2,
    authorName:'Ademoski gresz',
    datePub:'Jun 09, 2023',
  },

  {
    id:3,
    postThumnail:postimg3 ,
    postCategory:'Crypto Swap',
    postTitle:'Just swap your crypto curreny to any other on the go!',
    authorImage:pro3,
    authorName:'frediano xosu',
    datePub:'Jun 11, 2023',
  },

  {
    id:4,
    postThumnail:postimg4,
    postCategory:'Blockchain',
    postTitle:'Coinie main coin listed on Metamask last month',
    authorImage:pro1,
    authorName:'Ademoski gresz',
    datePub:'Jun 12, 2023',
  },

  {
    id:5,
    postThumnail:postimg5 ,
    postCategory:'Capital',
    postTitle:'Profit making is rest assured on coinie,just join us in the journey',
    authorImage:pro2,
    authorName:'frediano xosu',
    datePub:'Jun 13, 2023',
  },

  
  {
    id:6,
    postThumnail:postimg6 ,
    postCategory:'Easy transact',
    postTitle:'Fund your wallet with your local currency easily',
    authorImage:pro3,
    authorName:'zulee vino',
    datePub:'Jun 15, 2023',
  },
 ]


  return (
    <div className={theme ? 'bg-dark blog-sec':'bg-light blog-sec'}>

      
      <div className='blog-con'>
      <CryptoNav/>

          <div className={theme ?'text-white post-boxes':'text-black post-boxes'}>
            
             {
              blogArray.map((blogPost) =>
                <div className='post-box'>
                <div className='thumbnail'>
                  <img src={blogPost.postThumnail}/>
                </div>
                <button>{blogPost.postCategory}</button>
                <h1 className='post-title'>{blogPost.postTitle}</h1>
                  <div className="post-bottom">
                    <div className='author'>
                      <img src={blogPost.authorImage}/>
                      <h4>{blogPost.authorName}</h4>
                    </div>
                    <h4 className='date-pub'>{blogPost.datePub}</h4>
                  </div>
              </div>
              )
             }
           
          </div>

          
    </div>
    </div>
  )
}

export default Blog