import React from 'react'

export const Cards = ({post}) => {

  const tagStyle = {
    color: 'blue',
    textDecoration: 'underline',
    fontSize: '0.7em',
    margin:' 0 , 7rem',
    fontWeight: 'bold',
  };

  return (
    <div className='card'>
        <h3>{post.title}</h3>
        <p>By <span>{post.author}</span> on <span>{post.category}</span>  </p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div>
            {post.tags.map((tag,index)=>{
                return <span key={index}>
                {' '}
                <span style={tagStyle}>{`#${tag}`}</span>{' '}{' '}
              </span>
            })}
        </div>
    </div>
  )
}
