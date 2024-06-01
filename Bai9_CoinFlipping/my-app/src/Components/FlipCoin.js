import React, { useState } from 'react';
import Coin from './Coin'
import './FlipCoin.css'

const FlipCoin = () => {
  const [coins] = useState([
    {
      side: 'head',
      imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg',
    },
    {
      side: 'tail',
      imgSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg',
    },
  ]);
  const [currFace,setCurrFace] = useState(null)
  const [totalFlips,setTotalFlips] = useState(0)
  const [head, setHead] = useState(0)
  function logic(arr){
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx];
  }

  function handleBtn(){
    const value = logic(coins)
    setCurrFace(value)
    setTotalFlips(totalFlips+1)
    if (value.side === 'head'){
        setHead(head+1)
    }
  }

  return (
    <div className='container'>
      <h2>Let's flip a coin</h2>
      { currFace && <Coin info={currFace} />}
      <button onClick={handleBtn} >Flip Me!</button>
      <p>
            Out of {totalFlips} flips, there have been {head} heads and {totalFlips-head} tails
      </p>
    </div>
  );
};

export default FlipCoin;