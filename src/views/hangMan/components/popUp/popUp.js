import React from 'react';
import './popUp.css'

const PopUp = (props) => {
    return (
        <div className={'popUp-body'} >
            <p>{props.message}</p>
            <button onClick={props.method} >New Word</button>
        </div>
    )
};

export default PopUp;