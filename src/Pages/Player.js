import React from 'react'
import Sidebar from '../Components/Sidebar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

const Player = ({ spotify }) => {

  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body />
      </div>
      <div className='player__footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Player