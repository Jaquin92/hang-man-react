import React from 'react';
import Letter from './components/letter/letter_container';
import { Alphabet } from './alphabet';
import './keyboard.css'

const Keyboard = () => {
    const renderLetters = () => {
        return Alphabet.map((letter, i) => {
            return <Letter key={i} letter={letter} />
        })
    };
    return (
        <div className={'keyboard-body'} >
            {renderLetters()}
        </div>
    )
};
export default Keyboard