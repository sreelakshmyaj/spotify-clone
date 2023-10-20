import React, { useState,useEffect } from "react";
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
    
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {
          token ? (
            <h1>Logged In</h1>
          ) : (
            <Login />
          )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
