// import Joke from "./Joke";

// function App() {
//     return (
//         <div className="App">
//             <h1>Joke Generator Using React and Joke API</h1>
//             <Joke/>
//         </div>
//     );
// }

// export default App;

//----------------------------------lần 1---------------------------------
// import Joke from './Joke.js'
// export default function App(){
//   return(
//     <div>
//       <h1>joke Generator using react and joke API</h1>
//       <Joke/>
//     </div>
//   );
// }

//-------------------------------lần 2: tự làm --------------------------------------
import { useState } from "react";
import "./App.css";
export default function App() {
  const [joke, setJoke] = useState("");
  function fetchApi() {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  }
  return (
    <div className="App">
      <h1>Tbd</h1>
      <h1>Joke Generator Using React and joke API</h1>
      <button onClick={fetchApi}>Click to Generator a joke</button>
      <p>{joke}</p>
    </div>
  );
}
