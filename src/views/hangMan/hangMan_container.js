/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// actions
import { addLetter, addCorrectGuess, addIncorrectGuess, randomWord } from '../../ducks/reducer';
// actual presentational component that will utilize application state and actions (will be exported after being infused with state/actions)
import HangMan from './hangMan';
/* ========== ~~~~~~~~~~ IMAGE UPLOAD : PARENT ~~~~~~~~~~ ========== */
// CONTAINER COMPONENT
// interacts with redux (store of application state)
// infuses child component (imported above) with state & actions by mapping and then connecting them

// map state
const mapStateToProps = (reducer) => ({
    lettersUsed: reducer.lettersUsed,
    currentWord: reducer.currentWord,
    incorrectGuesses: reducer.incorrectGuesses,
    correctGuesses: reducer.correctGuesses,
    words: reducer.words,
    currentStreak: reducer.currentStreak
});

const mapDispatchToProps = dispatch => ({
    addLetter: (letter) => dispatch(addLetter(letter)),
    addIncorrectGuess: (num) => dispatch(addIncorrectGuess(num)),
    addCorrectGuess: (guesses) => dispatch(addCorrectGuess(guesses)),
    randomWord: (words, streak) => dispatch(randomWord(words, streak)),
});


/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
// utilizes "connect" functionality from redux in order to infuse state/actions as props to child component
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HangMan));