import React from 'react'
import MusicCard from '../Components/MusicCard'
import { loginUrl } from '../spotify'

const HomePreview = () => {
  return (
    <div className='homepreview'>
        <div className='homepreview__header'>
            <button className='primary-btn'>Sign up</button>
            <button className='secondary-btn'><a href={loginUrl}>Log in</a></button>
        </div>
        <div className='homepreview__container'>
            <h2>Spotify Playlist</h2>
            <div className='homepreview__containerMusic'>
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
            </div>
        </div>
    </div>
  )
}

export default HomePreview