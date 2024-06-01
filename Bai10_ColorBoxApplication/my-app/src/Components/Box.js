import React from 'react';

export default function Box({id,color,changeColer}){
    function handleClick(){
        changeColer(color)
    }
  return (
    <div
         key={id}
        onClick={handleClick}
        style={{
        backgroundColor: color,
        width: '13em',
        height: '13em',
      }}
    > {color}
    </div>
  );
};
