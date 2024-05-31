import React from 'react';

function Options(props) {
  const {options,selectedOption,onOptionChange} = props;

  return (
    <div>
        {options.map((option, index) => (
        <div key={index}>
           <input
             type="radio"
             name="option"
             value={option} 
             checked={selectedOption === option}  
             onChange={onOptionChange}      
           />
           <label>{option}</label>
         </div>
       ))}
      
    </div>
  );
}

export default Options;
