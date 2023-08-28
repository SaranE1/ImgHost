// App.js

import React from 'react';
import GifComponent from './Gifcomponent';
import imageSrc from 'D:/gitscam/image_tokyo/src/gif.gif';
import { useState } from 'react';
import HomePage from './HomePage';
import AnotherPage from './AnotherPage';

function App() {


    const [show, setShow] = useState(true)
    const handleButtonClick = () => {
        alert("Hi, I'm Gojo Satoru!")
      };


    return (
        <div className="App">
            {/* Other components or content */}
            <GifComponent imageUrl={imageSrc} onButtonClick={handleButtonClick} />
            {show? <HomePage/>:<AnotherPage/>}
        </div>
    );
}

export default App;
