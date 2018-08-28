import React from 'react';
import './popUp.css'

const PopUp = (props) => {
    const { message, method, buttonText } = props;
    let word = props.word;
    word = word.join('');
    return (
        <div className={'popUp-outer'} >
            <div className={'popUp-body'} >
                <p className={'popUp-message'} >{`${message} "${word}"!`}</p>
                <div className={'popUp-button'} onClick={method} >{buttonText}</div>
            </div>
        </div>
    )
};

export default PopUp;