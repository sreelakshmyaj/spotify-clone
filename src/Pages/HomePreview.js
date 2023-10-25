import React, { useState } from 'react'
import MusicCard from '../Components/MusicCard'
import { loginUrl } from '../spotify'
import { Backdrop } from '@mui/material'
import Popup from '../Components/Popup'

const HomePreview = () => {

  const [open, setOpen] = useState(false)

  const openPopup = () => {
    setOpen(true);
  }

  return (
    <div className='homepreview'>
        <Backdrop
          sx={{color: "#fff", zIndex: '10000'}}
          open={open}
          onClick={() => setOpen(false)}
          className='backdrop'
        >
          <Popup />
          <p className='popup-close'>Close</p>
        </Backdrop>
        <div className='homepreview__header'>
            <button className='primary-btn'>Sign up</button>
            <button className='secondary-btn'><a href={loginUrl}>Log in</a></button>
        </div>
        <div className='homepreview__container'>
            <h2>Spotify Playlist</h2>
            <div className='homepreview__containerMusic'>
                <MusicCard 
                  image='https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png'
                  name="Today's Top Hits"
                  description="Lana Del Rey on top of the hottest 50!"
                  onClick={openPopup}
                />
                <MusicCard 
                  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZmnfFWjVL2YhoyMdoIbKhMvhPKLsbfXKZef80HZB6A5R9lWeQJZaIYl5OEejHYmHgIk&usqp=CAU'
                  name="RapCaviar"
                  description="Music from Lil Tecca, Lil Uze Vert and Gucci Mane"
                  onClick={openPopup}
                />
                <MusicCard 
                  image="https://sun9-79.userapi.com/impg/bAszURSoA7RlDTIl3isC8Gk8FwxtI874042ozA/0JNgoP3CTWM.jpg?size=500x500&quality=96&sign=10e1ca74ea2838026ea43c276d975737&type=album"
                  name="All Out 2010s"
                  description="The biggest songs of the 2010s"
                  onClick={openPopup}
                />
                <MusicCard 
                  image="https://i.postimg.cc/VsMKNFtL/ab67706f000000036aef7fab3f837088a74271b9.jpg"
                  name="Mega Hit Mix"
                  description="A mega mix of 75 favorites from the last few years!"
                  onClick={openPopup}
                />
                <MusicCard 
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhieQS_oAIq12pd1cAakWVzouu1vsklF9nAHywMPa95kkYeLgZ-vSN1n6AktyGnk632w&usqp=CAU"
                  name="Pop Rising"
                  description="Who's now and next in pop"
                  onClick={openPopup}
                />
            </div>
        </div>
    </div>
  )
}

export default HomePreview