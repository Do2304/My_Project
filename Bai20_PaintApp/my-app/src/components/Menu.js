import React from "react"; 
import "../App.css"; 
  
const Menu = ({ setLineColor, setLineWidth,setLineOpacity }) => { 
    return ( 
        <div className="Menu"> 
           <label>Brush Color</label>
           <input type="color"
                onChange={e => setLineColor(e.target.value)}
           />
           <label>Brush Width</label>
           <input type="range"
                onChange={e => setLineWidth(e.target.value)}
           />
           <label>Brush Opacity</label>
           <input type="range"
                onChange={e => setLineOpacity(e.target.value)}
           />
        </div>
    ); 
}; 
  
export default Menu;