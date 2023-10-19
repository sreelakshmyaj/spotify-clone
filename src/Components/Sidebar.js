import React from 'react'
import { HomeRounded } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { LibraryMusic } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='login__sidebar'>
            <div className='login__sidebarBox'>
                <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt=''  width={90}/>
                <div>
                    <Link to='/'>
                        <div className='login__sidebarBoxItem'>
                            <HomeRounded />
                            <span>Home</span>
                        </div>
                    </Link>
                    
                    <Link to='/search'>
                        <div className='login__sidebarBoxItem'>
                            <Search />
                            <span>Search</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='login__sidebarBox' style={{height: '100%'}}>
                <div className='login__sidebarBoxItem' style={{marginTop: '0'}}>
                    <LibraryMusic />
                    <span>Your Library</span>
                </div>
                <div>
                    <p style={{textAlign: 'center'}}>Login in to create your own playlists and follow podcasts</p>
                </div>
            </div>
    </div>
  )
}

export default Sidebar