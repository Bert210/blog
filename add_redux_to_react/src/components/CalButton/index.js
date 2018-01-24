import React from 'react';
import './CalButton.css';

const CalButton = ({ value }) => {
    return (
        <div 
            className="calButton"
            onClick={() => console.log(value)}
        >
            {value}
        </div>
    )
}

export default CalButton;