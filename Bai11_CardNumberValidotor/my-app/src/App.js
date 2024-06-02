import React, { useState } from "react"; 
import validator from 'validator'
import './App.css'

export default function App(){
  const [errorMessage,setErrorMessage] = useState('')
  function valid(value){
    if (validator.isCreditCard(value)){
      setErrorMessage('Valid valid CreditCard')
    }
    else{
      setErrorMessage('Enter valid CreditCard Number')
    }
  }

  return ( 
    <div className="Container"> 
      <h2>Validating CreditCard in ReactJS</h2>
      <span>Enter CreditCard:</span> <input onChange={e=> valid(e.target.value)}/>
      <br/>
      <span
        style={{
          color: 'RED',
          fontSize: '20PX'
        }}
      >{errorMessage}</span>
    </div> 
  ); 
} 