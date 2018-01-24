import React from 'react';
import './CalButton.css';

const CalButton = ({ value, buttonPushed }) => {
    return (
        <div 
            className="calButton"
            onClick={() => buttonPushed(value)}
        >
            {value}
        </div>
    )
}

export default CalButton;