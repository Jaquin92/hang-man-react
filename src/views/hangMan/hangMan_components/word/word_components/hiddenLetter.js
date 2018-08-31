import React from 'react';
import './hiddenLetter.css';

const HiddenLetter = (props) => {
    const lettersUsed = props.lettersUsed;
    const letter = props.letter;
    const styles = () => {
        return lettersUsed.indexOf(letter) >= 0 ? 'letter-found' : 'letter-hidden'
    };
    return (
        <div className={'hiddenLetter-body'} >
            <div className={styles()} >{props.letter}</div>
        </div>
    )
};

export default HiddenLetter;