import React, { useEffect } from "react";
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Pages/Player";
import { useDateLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useDateLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

      let _token = hash.access_token;

    if (_token) {
      console.log(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        })
      })
    }
    
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        {
          token ? <Player spotify={spotify} /> : <Login />
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
