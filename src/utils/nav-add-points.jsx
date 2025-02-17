import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NaviAddPoints() {
    const navigate = useNavigate();

    const navigateToAddPoints = () => {
        navigate('/add-points');
    }

    return (
        <button onClick={navigateToAddPoints} className='back-button'>Go to Add Points Page</button>
    );
}
