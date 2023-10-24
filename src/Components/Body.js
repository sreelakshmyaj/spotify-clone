import { ArrowBackIosRounded, FavoriteBorderOutlined, PermIdentityRounded, PlayArrowRounded  } from '@mui/icons-material'
import { Avatar, Tooltip } from '@mui/material'
import React from 'react'
import { useDateLayerValue } from '../DataLayer'

const Body = () => {
  const [{user, megahitmix}] = useDateLayerValue();
  console.log(megahitmix)
  return (
    <div className='body'>
        <div className='body__headSection'>
          <div className='body__headSectionHeader'>
            <Tooltip title="Go Back">
              <ArrowBackIosRounded className='arrow-icon'/>
            </Tooltip>
            <Tooltip title={user?.display_name} placement='bottom-start' className='tooltip'>
                <Avatar src={user?.images[0]?.url} className='user-icon' sx={{bgcolor: "#000"}} alt={user?.display_name}>
                  <PermIdentityRounded />
                </Avatar>
            </Tooltip>
          </div>
          
          <div className='body__headSectionBanner'>
            <img src={megahitmix?.images[0].url} alt=' '/>
            <div className='text'>
              <small>Playlist</small>
              <h1 className='title'>Mega Hit Mix</h1>
              <small>{megahitmix?.description}</small>
            </div>
          </div>
        </div>
       
        <div className='body__container'>
          <div className='body__containerHeader'>
            <PlayArrowRounded className='play-icon'/>
            <Tooltip title="Save to your Library" placement='top'>
              <FavoriteBorderOutlined className='heart-icon'/>
            </Tooltip>
          </div>
          <div className='body__containerSongs'>
            {megahitmix?.tracks.items.map((item, index) => (
              <table className='song'>
                <tr>
                  <td className='songIndex'>{index+1}</td>
                  <td className='songImg'> <img src={item.track.album.images[0].url} alt='' /></td>
                  <td className='song__info'>
                    <p>{item.track.name}</p>
                    <small>
                      {item.track.artists.map((artist) => artist.name).join(", ")}
                    </small>
                  </td>
                  <td className='albumName'><small>{item.track.album.name}</small></td>
                </tr>
              </table>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Body