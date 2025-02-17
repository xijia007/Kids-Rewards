// import React from 'react';
// import NaviHome from '../utils/navi-home';
// import NaviRewardDetails from '../utils/navi-rewards';
// import NaviAddPoints from '../utils/nav-add-points';
// import kidImage from '../utils/kid-image.jpg';


// function KidDetail() {
//   return (
//     <div className="kid-container">
//       <h1>Kid Detail Page</h1>
//       <NaviHome />

//       <img src={kidImage} alt="Kid's Image" className="kid-image" />


//       <h4 className='kid-subtitle'>Kid Name: Yixi</h4>

//       <h4 className='kid-subtitle'>Total Points: 10</h4>
     

//       <h4 className='kid-subtitle'>Add Points:</h4>
//       <NaviAddPoints />

//       <h4 className='kid-subtitle'>Use Points: </h4>
//       <NaviRewardDetails />

//     </div>
//   );
// }

// export default KidDetail;

import React, { useState, useRef } from 'react';
import NaviHome from '../utils/navi-home';
import NaviRewardDetails from '../utils/navi-rewards';
import NaviAddPoints from '../utils/nav-add-points';
import kidImage from '../utils/kid-image.jpg';
import '../css/KidDetail.css';

function KidDetail() {
  const [currentImage, setCurrentImage] = useState(kidImage);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing the camera: ", err);
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    setCurrentImage(canvas.toDataURL('image/jpeg'));
    setShowCamera(false);
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
  };

  return (
    <div className="kid-container">
      <h1>Kid Detail Page</h1>
      <div className='navi-home'> <NaviHome /></div>
     

      <div className="image-container">
        <img 
          src={currentImage} 
          alt="Kid's Image" 
          className="kid-image" 
          onClick={handleImageClick}
        />
        <div className="image-options">
          <button onClick={handleImageClick}>Choose Image</button>
          <button onClick={startCamera}>Take Photo</button>
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          style={{display: 'none'}} 
          accept="image/*"
        />
      </div>

      {showCamera && (
        <div className="camera-container">
          <video ref={videoRef} autoPlay />
          <button onClick={takePhoto}>Capture</button>
        </div>
      )}

      <h4 className='kid-subtitle'>Kid Name: Yixi</h4>
      <h4 className='kid-subtitle'>Total Points: 10</h4>
      
      <h4 className='kid-subtitle'>Add Points:</h4>
      <NaviAddPoints />

      <h4 className='kid-subtitle'>Use Points: </h4>
      <NaviRewardDetails />
    </div>
  );
}

export default KidDetail;
