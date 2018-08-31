/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// actions
import { useHint } from '../../../../ducks/reducer'
// actual presentational component that will utilize application state and actions (will be exported after being infused with state/actions)
import Hints from './hints';



/* ========== ~~~~~~~~~~ IMAGE UPLOAD : PARENT ~~~~~~~~~~ ========== */
// CONTAINER COMPONENT
// interacts with redux (store of application state)
// infuses child component (imported above) with state & actions by mapping and then connecting them

// map state
const mapStateToProps = (reducer) => ({
    hints: reducer.hints,
    currentWord: reducer.currentWord,
    correctGuesses: reducer.correctGuesses
});

const mapDispatchToProps = dispatch => ({
    useHint: (letter) => dispatch(useHint(letter))
});


/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
// utilizes "connect" functionality from redux in order to infuse state/actions as props to child component
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Hints));