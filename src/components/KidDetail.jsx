// // import React, { useState, useRef } from 'react';
// // import NaviHome from '../utils/navi-home';
// // import NaviRewardDetails from '../utils/navi-rewards';
// // import NaviAddPoints from '../utils/nav-add-points';
// // import kidImage from '../utils/kid-image.jpg';
// // import '../css/KidDetail.css';

// // function KidDetail() {
// //   const [currentImage, setCurrentImage] = useState(kidImage);
// //   const fileInputRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const [showCamera, setShowCamera] = useState(false);

// //   const handleImageClick = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleImageChange = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setCurrentImage(e.target.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const startCamera = async () => {
// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //       videoRef.current.srcObject = stream;
// //       setShowCamera(true);
// //     } catch (err) {
// //       console.error("Error accessing the camera: ", err);
// //     }
// //   };

// //   const takePhoto = () => {
// //     const canvas = document.createElement('canvas');
// //     canvas.width = videoRef.current.videoWidth;
// //     canvas.height = videoRef.current.videoHeight;
// //     canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
// //     setCurrentImage(canvas.toDataURL('image/jpeg'));
// //     setShowCamera(false);
// //     videoRef.current.srcObject.getTracks().forEach(track => track.stop());
// //   };

// //   return (
// //     <div className="kid-container">
// //       <h1>Kid Detail Page</h1>
// //       <div className='navi-home'> <NaviHome /></div>

// //       <div className="image-container">
// //         <img
// //           src={currentImage}
// //           alt="Kid's Image"
// //           className="kid-image"
// //           onClick={handleImageClick}
// //         />
// //         <div className="image-options">
// //           <button onClick={handleImageClick}>Choose Image</button>
// //           <button onClick={startCamera}>Take Photo</button>
// //         </div>
// //         <input
// //           type="file"
// //           ref={fileInputRef}
// //           onChange={handleImageChange}
// //           style={{display: 'none'}}
// //           accept="image/*"
// //         />
// //       </div>

// //       {showCamera && (
// //         <div className="camera-container">
// //           <video ref={videoRef} autoPlay />
// //           <button onClick={takePhoto}>Capture</button>
// //         </div>
// //       )}

// //       <h4 className='kid-subtitle'>Kid Name: Yixi</h4>
// //       <h4 className='kid-subtitle'>Total Points: 10</h4>

// //       <h4 className='kid-subtitle'>Add Points:</h4>
// //       <NaviAddPoints />

// //       <h4 className='kid-subtitle'>Use Points: </h4>
// //       <NaviRewardDetails />
// //     </div>
// //   );
// // }

// // export default KidDetail;

// // KidDetail.js
// import React, { useState, useRef, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import NaviHome from '../utils/navi-home';
// import NaviRewardDetails from '../utils/navi-rewards';
// import NaviAddPoints from '../utils/nav-add-points';
// import kidImage from '../utils/kid-image.jpg';
// import '../css/KidDetail.css';

// function KidDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [kid, setKid] = useState(location.state?.kid);
//   const [currentImage, setCurrentImage] = useState(kid?.image || kidImage);
//   const fileInputRef = useRef(null);
//   const videoRef = useRef(null);
//   const [showCamera, setShowCamera] = useState(false);

//   useEffect(() => {
//     if (!location.state?.kid) {
//       navigate('/');
//     }
//   }, [location, navigate]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const updatedKid = { ...kid, image: e.target.result };
//         setKid(updatedKid);
//         setCurrentImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//       setShowCamera(true);
//     } catch (err) {
//       console.error("Error accessing the camera: ", err);
//     }
//   };

//   const takePhoto = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
//     const newImage = canvas.toDataURL('image/jpeg');
//     const updatedKid = { ...kid, image: newImage };
//     setKid(updatedKid);
//     setCurrentImage(newImage);
//     setShowCamera(false);
//     videoRef.current.srcObject.getTracks().forEach(track => track.stop());
//   };

//   if (!kid) return null;

//   return (
//     <div className="kid-container">
//       <h1>{kid.name}'s Detail Page</h1>
//       <div className='navi-home'><NaviHome /></div>

//       <div className="image-container">
//         <img
//           src={currentImage}
//           alt={kid.name}
//           className="kid-image"
//           onClick={handleImageClick}
//         />
//         <div className="image-options">
//           <button onClick={handleImageClick}>Choose Image</button>
//           <button onClick={startCamera}>Take Photo</button>
//         </div>
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           style={{display: 'none'}}
//           accept="image/*"
//         />
//       </div>

//       {showCamera && (
//         <div className="camera-container">
//           <video ref={videoRef} autoPlay />
//           <button onClick={takePhoto}>Capture</button>
//         </div>
//       )}

//       <h4 className='kid-subtitle'>Kid Name: {kid.name}</h4>
//       <h4 className='kid-subtitle'>Age: {kid.age}</h4>
//       <h4 className='kid-subtitle'>Total Points: {kid.points}</h4>

//       <h4 className='kid-subtitle'>Add Points:</h4>
//       <NaviAddPoints />

//       <h4 className='kid-subtitle'>Use Points: </h4>
//       <NaviRewardDetails />
//     </div>
//   );
// }

// export default KidDetail;

import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NaviHome from '../utils/navi-home'
import NaviRewardDetails from '../utils/navi-rewards'
import NaviAddPoints from '../utils/nav-add-points'
import '../css/KidDetail.css'

function KidDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { kid: initialKid } = location.state || {}

  useEffect(() => {
    if (!initialKid) {
      navigate('/')
    }
  }, [initialKid, navigate])

  if (!initialKid) return null

  return (
    <div className="kid-container">
      <h1>{initialKid.name}'s Details</h1>
      <div className="navi-home">
        <NaviHome />
      </div>

      <div className="profile-section">
        {initialKid.image && (
          <img
            src={initialKid.image}
            alt={initialKid.name}
            className="kid-avatar-large"
          />
        )}
        <div className="kid-info">
          <div className="info-item">
            <span className="info-label">Age:</span>
            <span className="info-value">{initialKid.age}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Points Balance:</span>
            <span className="info-value">{initialKid.points}</span>
          </div>
        </div>
      </div>

      <div className="action-sections">
        <div className="action-card">
          <h3 className="action-title">Earn Points</h3>
          <NaviAddPoints />
          <p className="action-description">Add points for completed tasks</p>
        </div>

        <div className="action-card">
          <h3 className="action-title">Redeem Rewards</h3>
          <NaviRewardDetails />
          <p className="action-description">Spend points on approved rewards</p>
        </div>
      </div>

      <div className="history-section">
        <h2>Activity History</h2>
        <div className="history-list">
          {initialKid.history?.length > 0 ? (
            initialKid.history.map((item, index) => (
              <div key={index} className="history-item">
                <span className="history-date">{item.date}</span>
                <span className="history-description">{item.description}</span>
                <span className={`history-points ${item.type}`}>
                  {item.type === 'earned' ? '+' : '-'}
                  {item.points}
                </span>
              </div>
            ))
          ) : (
            <p className="no-history">No activity recorded yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default KidDetail
