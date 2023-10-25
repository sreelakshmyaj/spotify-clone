import React, { useState } from 'react'
import { PlayArrow } from '@mui/icons-material'

const MusicCard = ({image, name, description, onClick}) => {
    const [opacity, setOpacity] = useState(0);
  return (
    <div className='card' onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)} onClick={onClick}>
        <div className='card__cover'>
            <img src={image} alt='' width={150}/>
            <div>
                <PlayArrow className='play-icon' style={{opacity: `${opacity}`, zIndex: '1', bottom: '30px'}}/>
            </div>
        </div>
        <div className='card__text'>
            <h4>{name}</h4>
            <small>{description}</small>
        </div>
    </div>
  )
}

export default MusicCard