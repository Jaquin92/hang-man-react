import React from 'react';
import './bombProgress.css';

const BombProgress = (props) => {
    return (
        <img src={props.src} className={props.styles} alt="Tries left" />
    )
};

export default BombProgress;