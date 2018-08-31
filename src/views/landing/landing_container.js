/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// actions
import { getWords } from '../../ducks/reducer';
// actual presentational component that will utilize application state and actions (will be exported after being infused with state/actions)
import Landing from './landing';



/* ========== ~~~~~~~~~~ IMAGE UPLOAD : PARENT ~~~~~~~~~~ ========== */
// CONTAINER COMPONENT
// interacts with redux (store of application state)
// infuses child component (imported above) with state & actions by mapping and then connecting them

// map state
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    getWords: (difficulty) => dispatch(getWords(difficulty))
});


/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
// utilizes "connect" functionality from redux in order to infuse state/actions as props to child component
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing));