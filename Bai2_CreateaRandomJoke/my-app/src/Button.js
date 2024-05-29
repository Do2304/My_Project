// import React from "react";
// import './Button.css'
 
// const Button = (props) => {
//     return <button onClick={props.callApi}>
//         Click to generate a joke.
//     </button>;
// }

// export default Button;

import './Button.css'
export default function Button({callApi}){
    return(
        <>
            <button onClick={callApi}>Click me</button>
        </>
    );
}