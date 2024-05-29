import React from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Die({face,rolling}){
    
    return(
        <div>
            <FontAwesomeIcon 
                icon={`fa-dice-${face}`}
                className={`Die ${rolling && 'Die-shaking'}`}
            />
        </div>
    );
} 