// GifComponent.js

import React from 'react';
import ClickHereButton from './ClickHereButton';



// function GifComponent() {
//     const handleClick = () => {
//         alert('Button clicked');
//     }
//     return (
//         <div className="GifComponent">
//             <ClickHereButton onClick={handleClick}/>
//             <img src= {require("D:/gitscam/image_tokyo/src/gif.gif")} alt="" />
//         </div>
//     );
// }

const GifComponent = ({ imageUrl, onButtonClick }) => {
    
    return (
      <div className="image-container">
        <img src={imageUrl} alt="" className="image" />
        <ClickHereButton onClick={onButtonClick} />
      </div>
    );
  };

export default GifComponent;
