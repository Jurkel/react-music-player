import React, {useState} from 'react';
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Song from './components/Song';
import data from './data';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
