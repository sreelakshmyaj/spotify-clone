import React from 'react'
import { HomeRounded } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { LibraryMusic } from '@mui/icons-material'
import { useDateLayerValue } from '../DataLayer'
import PlaylistOption from './PlaylistOption'

const Sidebar = () => {

    const [ {token, playlists} ] = useDateLayerValue();
    console.log(playlists)

  return (
    <div className='sidebar'>
            <div className='sidebar__box'>
                {!token && <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt=''  width={90}/>}
                <div>
                    <Link to='/'>
                        <div className='sidebar__boxItem'>
                            <HomeRounded />
                            <span>Home</span>
                        </div>
                    </Link>
                    
                    <Link to='/search'>
                        <div className='sidebar__boxItem' style={{marginBottom: '0'}}>
                            <Search />
                            <span>Search</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='sidebar__box library' style={{height: '100%'}}>
                <div className='sidebar__boxItem' style={{marginTop: '0', opacity: '1'}}>
                    <LibraryMusic />
                    <span>Your Library</span>
                </div>
                <div>
                    {
                        token ? 
                            (
                                <div className='library__item'>
                                    {playlists?.items?.map((playlist) => 
                                    (
                                        <PlaylistOption 
                                            title={playlist.name}
                                            image={playlist.images[2].url}
                                        />
                                    ))}
                                </div>
                            ): 
                            (<p style={{textAlign: 'center'}}>Login in to create your own playlists and follow podcasts</p>)
                    }
                </div>
            </div>
    </div>
  )
}

export default Sidebar