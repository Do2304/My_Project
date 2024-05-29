// import React, { useState } from "react"; 
// import validator from 'validator'

// const App = () => { 
//     const [errorMessage, setErrorMessage] = useState('') 
//     const validate = (value) => { 
//         if (validator.isStrongPassword(value, { 
//             minLength: 8, minLowercase: 1, 
//             minUppercase: 1, minNumbers: 1, minSymbols: 1 
//           })) { 
//             setErrorMessage('Is Strong Password') 
//         } else { 
//             setErrorMessage('Is Not Strong Password') 
//         } 
//     } 
//     return ( 
//         <div style={{ 
//             marginLeft: '200px', 
//         }}> 
//             <pre> 
//                 <h2>Checking Password Strength in ReactJS</h2> 
//                 <span>Enter Password: </span><input type="text"
//                     onChange={(e) => validate(e.target.value)}></input> <br /> 
//                 {errorMessage === '' ? null : 
//                     <span style={{ 
//                         fontWeight: 'bold', 
//                         color: 'red', 
//                     }}>{errorMessage}</span>} 
//             </pre> 
//         </div> 
//     ); 
// } 
// export default App

//----------------------------------lần 1--------------------
import {useState} from 'react'
import validator from 'validator'
export default function App(){
  const [mess, setMess] = useState('')
  function handleCheck(value){
    if (validator.isStrongPassword(value,{
      minLength:8,
      minNumbers:1,
      minLowercase:1,
      minSymbols:1,
      minUppercase:1,
    })){
      setMess('Is Strong Mess')
    }
    else{
      setMess('is NOT Strong Mess')
    }
  }
  return(
    <div style={{marginLeft: '300px'}}>
      <h2>Checking Password Strength in ReactJS</h2>
      <span>Enter Password: </span> <input
        onChange={(e) => handleCheck(e.target.value)}       
      /> 
      <br/>
      {mess ==='' ? null :(
        <span
          style={{color: 'red'}}
        >{mess}</span>
      )}
    </div>
  );
}