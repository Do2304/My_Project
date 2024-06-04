import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function App() {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("https://www.youtube.com/watch?v=ZvHBk2G2Dnk");
  function handleClick(){
    movieTrailer(video).then((res)=>{
      setVideoURL(res)
    })
  }

  return (
    <div className="App">
      <div className="search-box">
        <label>Search for any movies/shows:</label>
        <input placeholder="Search..." value={video} onChange={e => setVideo(e.target.value) } />
        <button onClick={handleClick}>Search</button>
      </div>
      <ReactPlayer url={videoURL} controls={true}/>
    </div>
  );
}

export default App;

