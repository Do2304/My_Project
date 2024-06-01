import React, { useState, useEffect } from 'react';
import './BoxContainer.css';
import Box from './Box';
import { rgbValue, generateColors } from './helper';

export default function BoxContainer(){
    const [colors,setColors] = useState(generateColors(18))
    function changeColer(c){
        let newColor 
        do{
            newColor = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`
        }
        while (newColor === c)
        setColors((preV)=>
            preV.map((color) => color !== c ? color : newColor)
        ) 
    }

  return (
    <div className="BoxContainer">   
        {colors.map((color,id)=>(
            <Box key={id} color={color} changeColer={changeColer}/>
        ))} 
        
    </div>
  );
};

