import React, { useState } from "react";
import "./Avatar.css";
import Axios from 'axios';
const Avatar = () => {
  const [seed, setSeed] = useState(1);
  const [imageUrl, setImageUrl] = useState(`https://robohash.org/${seed}.png`);

  function handleSeed(value) {
    setSeed(value)
    setImageUrl(`https://robohash.org/${value}.png`)
  }
  function downloadImage() { 
    Axios({
        method: "get",
        url: `https://robohash.org/${seed}.png`,
        responseType: "arraybuffer",
      })
        .then((response) => {
          // Tạo file hình ảnh
          const imageBlob = new Blob([response.data], { type: "image/png" });
          const imageUrl = URL.createObjectURL(imageBlob);
    
          // Tạo link để tải xuống file
          const link = document.createElement("a");
          link.href = imageUrl;
          link.download = `${seed}.png`;
          document.body.appendChild(link);
          link.click();
    
         // Xóa link tải xuống
          setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(imageUrl);
          }, 200);
          
        })
        .catch((error) => {
          console.error(error);
        });
} 
  return (
    <div className="container">
      <div className="nav">
        <p>Random Avatar Generator</p>
      </div>
      <div className="home">
        <div className="btns">
          <button onClick={() => handleSeed(1)}>
            Person 1
          </button>
          <button onClick={() => handleSeed(2)}>
          Person 2
          </button>
          <button onClick={() => handleSeed(3)}>
          Person 3
          </button>
          <button onClick={() => handleSeed(4)}>
          Person 4
          </button>
          <button onClick={() => handleSeed(5)}>
          Person 5
          </button>
          <button onClick={() => handleSeed(6)}>
            Person 6
          </button>
          <button onClick={() => handleSeed(7)}>
          Person 7
          </button>
        </div>

        <div className="avatar">
          <img
            src={imageUrl}
            alt="Avatar"
          />
        </div>

        <div className="generate"> 
          <button id="down" onClick={() => {downloadImage()}}>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

