import React from 'react'
import { loginUrl } from '../spotify'

const Popup = () => {
  return (
    <div className='popup'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png' alt=''/>
        <div>
            <h2>Start listening with a free Spotify Account</h2>
            <button className='secondary-btn'><a href={loginUrl}>Log in</a></button>
        </div>
    </div>
  )
}

export default Popup