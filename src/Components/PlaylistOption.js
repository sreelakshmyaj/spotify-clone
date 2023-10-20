import React from 'react'

const PlaylistOption = ({title, image}) => {
  return (
    <div className='playlist'>
        <img src={image} alt='' width={40}/>
        <p>{title}</p>
    </div>
  )
}

export default PlaylistOption