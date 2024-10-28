import React from 'react';
import './FullScreenImage.css'; // Import the CSS file
import myImage from './assets/space.png';

const FullScreenImage = () => {
    return (
        <div className="fullscreen-image">
            <img 
                src={myImage} // Replace with your image URL
                alt="Full Screen"
            />
        </div>
    );
};

export default FullScreenImage;
