// import React from 'react';
// import NaviHome from '../utils/navi-home';
// import '../css/AddKids.css'; 

// function AddKids() {
//   return (
//     <div className="add-kids-container">
//       <h1 className="add-kids-title">Add New Kid</h1>
      
//       <form className="add-kids-form">
//         <div className="form-group">
//           <label htmlFor="kidName">Kid Name:</label>
//           <input type="text" id="kidName" name="kidName" className="form-input" placeholder="Enter kid's name" required />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="kidAge">Age:</label>
//           <input type="number" id="kidAge" name="kidAge" className="form-input" placeholder="Enter kid's age" required />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="kidImage">Profile Picture:</label>
//           <input type="file" id="kidImage" name="kidImage" className="form-input file-input" accept="image/*" />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="initialPoints">Initial Points:</label>
//           <input type="number" id="initialPoints" name="initialPoints" className="form-input" placeholder="Enter initial points" />
//         </div>
        
//         <button type="submit" className="submit-button">Add Kid</button>
//       </form>

//       <NaviHome className="home-button" />
//     </div>
//   );
// }

// export default AddKids;


// AddKids.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NaviHome from '../utils/navi-home';
import '../css/AddKids.css';

function AddKids({ onAddKid }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const kidImageFile = formData.get('kidImage');
    
    const newKid = {
      name: formData.get('kidName'),
      age: formData.get('kidAge'),
      points: formData.get('initialPoints') || 0,
      image: null,
    };

    if (kidImageFile && kidImageFile.size > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newKid.image = reader.result;
        completeSubmission(newKid);
      };
      reader.readAsDataURL(kidImageFile);
    } else {
      completeSubmission(newKid);
    }
  };

  const completeSubmission = (kid) => {
    onAddKid(kid);
    navigate('/');
  };

  return (
    <div className="add-kids-container">
      <h1 className="add-kids-title">Add New Kid</h1>
      
      <form className="add-kids-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="kidName">Kid Name:</label>
          <input type="text" id="kidName" name="kidName" className="form-input" placeholder="Enter kid's name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="kidAge">Age:</label>
          <input type="number" id="kidAge" name="kidAge" className="form-input" placeholder="Enter kid's age" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="kidImage">Profile Picture:</label>
          <input type="file" id="kidImage" name="kidImage" className="form-input file-input" accept="image/*" />
        </div>
        
        <div className="form-group">
          <label htmlFor="initialPoints">Initial Points:</label>
          <input type="number" id="initialPoints" name="initialPoints" className="form-input" placeholder="Enter initial points" />
        </div>
        
        <button type="submit" className="submit-button">Add Kid</button>
      </form>

      <NaviHome className="home-button" />
    </div>
  );
}

export default AddKids;
