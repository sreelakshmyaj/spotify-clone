import { PlayCircleFilledRounded, PlaylistPlay, RepeatRounded, ShuffleRounded, SkipNextRounded, SkipPreviousRounded, VolumeDownRounded } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'
import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img src="" alt='' width={60}/>
        <div className='song-info'>
          <small className='title'>Ceilings</small>
          <small className='artist'>Lizzy McAlpine</small>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleRounded className='outer-icon highlight__green'/>
        <SkipPreviousRounded className='skip-icon'/>
        <PlayCircleFilledRounded className='play-icon'/>
        <SkipNextRounded className='skip-icon'/>
        <RepeatRounded className='outer-icon'/>
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDownRounded />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' className='slider'/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer