import React , {useState} from 'react';
import Player from './components/Player'
import Track from './components/Track'
import Storage from './Storage';
import './styles/app.scss'

function App() {

  const [track, setTrack ] = useState(Storage());
  const [currentTrack, setCurrentTrack] = useState(track[0])
  const [isPlaying, setIsPlaying]  = useState(false)
  return (
    <div className="App">
      <Track currentTrack = {currentTrack}/>
      <Player setIsPlaying = {setIsPlaying} isPlaying = {isPlaying} currentTrack = {currentTrack}/>
    </div>
  );
}

export default App;
