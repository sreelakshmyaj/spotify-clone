import React, { useState } from 'react'
import { PlayArrow } from '@mui/icons-material'

const MusicCard = () => {
    const [opacity, setOpacity] = useState(0);
  return (
    <div className='card' onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)}>
        <div className='card__cover'>
            <img src='https://imgv3.fotor.com/images/blog-richtext-image/born-to-die-music-album-cover.png' alt='' width={150}/>
            <div>
                <PlayArrow className='play-icon' style={{opacity: `${opacity}`, zIndex: '1', bottom: '30px'}}/>
            </div>
        </div>
        <div className='card__text'>
            <h4>Today's Top Hits</h4>
            <small>Lana Del Rey on top of the hottest 50!</small>
        </div>
    </div>
  )
}

export default MusicCard