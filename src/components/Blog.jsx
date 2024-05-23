import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import { Cards } from './Cards';

export const Blog = () => {

    //consume
    const {posts, loading}= useContext(AppContext);
    
    if (!Array.isArray(posts)) {
      return <div> <Spinner/> </div>
    }
    

    // console.log("in blog")
    // console.log(typeof(posts));

  return (
    <div className='blog-container'>
        {
            loading ? (<Spinner/>) : 
            (
              posts.length === 0 ? (<div> <p>No post found</p></div>) : (posts.map( (post , id) =>(<Cards key={id} post={post}/>)))
            )
        }
    </div>
  )
}
