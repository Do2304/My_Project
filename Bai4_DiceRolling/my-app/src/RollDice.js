import React, { useState } from 'react';
import './RollDice.css';
import Die from './Die';

export default function RollDice({sides = ['one','two','three','four','five','six']}){
    const [die1,setDie1] = useState('one')
    const [die2,setDie2] = useState('one')
    const [rolling,setRolling] = useState(false)
    function roll(){
        setDie1(sides[Math.floor(Math.random() * sides.length)])
        setDie2(sides[Math.floor(Math.random() * sides.length)])
        setRolling(true)
        setTimeout(()=>{
            setRolling(false)
        },1000)
    }
    const handleBtn = rolling ? 'handleBtn' : ''
    return (
        <div className='container'>
            <div className='container-Die'>
                <Die face={die1} rolling={rolling}/>
                <Die face={die2} rolling={rolling}/>
            </div>
            <button className={handleBtn} onClick={roll}>{rolling ? 'Rolling' : 'Roll Dice'}</button>
        </div>
    );
}
