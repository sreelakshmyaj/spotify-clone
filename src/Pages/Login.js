import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Routes, Route } from 'react-router-dom';
import HomePreview from './HomePreview';

const Login = () => {
  return (
    <div>
    <div className='login'>
        <Sidebar />
        <div className='login__container'>
                <Routes>
                    <Route path='/' element={<HomePreview />} />
                    <Route path='/search' element='search' />
                </Routes>
        </div>
    </div>
    <div className='login__footer'>
      <small style={{fontSize: '12px'}}>PREVIEW OF SPOTIFY</small>
      <p style={{marginTop: '10px', fontWeight: 'bold'}}>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</p>
    </div>
    </div>
  )
}

export default Login