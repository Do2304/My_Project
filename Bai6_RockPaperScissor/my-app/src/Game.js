import React, {useState} from 'react'
import './Game.css'

export default function Game(){
    const [playerVal,setPlayerVal] = useState('')
    const [computerVal,setComputerVal] = useState('')
    const [playerScore, setPlayerScore] = useState(0);
    const [compScore, setCompScore] = useState(0);

    function logic(playerVal,computerVal){
        if (playerVal === computerVal){
            return 0;
        }
        else if ((playerVal === 'Rock' && computerVal === 'Scissors') ||
                (playerVal === 'Paper' && computerVal === 'Rock') ||
                (playerVal === 'Scissors' && computerVal === 'Paper') 
        ){
            return 1;
        }
        else{
            return -1;
        }
    }

    function handleDecision(playerChoice){
        const choices = ["Rock", "Paper", "Scissors"]
        const compChoice = choices[Math.floor(Math.random() * choices.length)]
        const val = logic(playerChoice,compChoice)
        if ( val === 1){
            setPlayerVal(playerChoice)
            setComputerVal(compChoice)
            setPlayerScore(playerScore +1)
        }
        else if (val === -1){
            setPlayerVal(playerChoice)
            setComputerVal(compChoice)
            setCompScore(compScore+1)
        }
        else{
            setPlayerVal(playerChoice)
            setComputerVal(compChoice)
        }
    }
    return(
        <div className='container'>
            <h1>Welcome to rock, paper, scissors game</h1>
            <div className='Btn'>
                <button onClick={() => handleDecision('Rock')}>Rock</button>
                <button onClick={() => handleDecision('Paper')}>Paper</button>
                <button onClick={() => handleDecision('Scissors')}>Scisors</button>
            </div>
            <div className='Content'>
                <p>Your choice: {playerVal}</p>
                <p>Computer's choice: {computerVal}</p>
                <h2>Your Score: {playerScore}</h2>
                <h2>Computer Score: {compScore}</h2>
            </div>
        </div>
    )
}



