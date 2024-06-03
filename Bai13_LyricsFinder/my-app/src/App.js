import './App.css'; 
import Axios from 'axios'; 
import { useState } from 'react'; 

function App() { 
    const [artist, setArtist] = useState(""); 
    const [song, setSong] = useState(""); 
    const [lyrics, setLyrics] = useState(""); 

    function handleClick(){
      Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res =>{
        setLyrics(res.data.lyrics)
      })
      .catch((error)=>{
        setLyrics('Ko co loi bai hat')
      })
    }
  
    return ( 
        <div className="App"> 
            <h1>Lyrics Finder 🎶</h1> 
           <div className='in'>
              <input className='inp' placeholder='Artist Name'
                onChange={(e) => setArtist(e.target.value)}
              />
              <input className='inp' placeholder='Song Name' 
                onChange={(e) => setSong(e.target.value)}
              />
           </div>
            <button className='btn' onClick={handleClick}>🎶Search</button>
            <hr/>
            <p>{lyrics}</p>
        </div> 
    ); 
} 
export default App;