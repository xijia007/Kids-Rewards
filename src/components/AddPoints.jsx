// import NaviHome from '../utils/navi-home';
// import NaviKidDetail from '../utils/navi-kid-detail';


// function AddPoints() {
//     return (
//       <div>

//         <h4>Add Points Page</h4>

//         <NaviKidDetail />
//         <NaviHome />

  
//       </div>
//     );
//   }
  
//   export default AddPoints;
import React, { useState } from 'react';
import NaviHome from '../utils/navi-home';
import NaviKidDetail from '../utils/navi-kid-detail';
import '../css/AddPoints.css';
import kidImage from '../utils/kid-image.jpg';


function AddPoints() {
    const [points, setPoints] = useState('');
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log('Points added:', points, 'Date:', date);
    };

    return (
        <div className="add-points-container">
            <h1 className="add-points-title">Add Points</h1>

            <div className="kid-info">
                <img src={kidImage} alt="Kid's Image" className="kid-image" />
                <h2 className="kid-name">Kid Name: Yixi</h2>
                <p className="total-points">Total Points: 10</p>
            </div>

            <form onSubmit={handleSubmit} className="add-points-form">
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="points">Points:</label>
                    <input 
                        type="number" 
                        id="points" 
                        value={points} 
                        onChange={(e) => setPoints(e.target.value)}
                        placeholder="Enter points"
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Add Points</button>
            </form>

            <div className="navigation">
                <NaviKidDetail />
                <NaviHome />
            </div>
        </div>
    );
}

export default AddPoints;
