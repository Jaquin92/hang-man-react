/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// actual presentational component that will utilize application state and actions (will be exported after being infused with state/actions)
import HiddenLetter from './hiddenLetter';



/* ========== ~~~~~~~~~~ IMAGE UPLOAD : PARENT ~~~~~~~~~~ ========== */
// CONTAINER COMPONENT
// interacts with redux (store of application state)
// infuses child component (imported above) with state & actions by mapping and then connecting them

// map state
const mapStateToProps = (reducer) => ({
    lettersUsed: reducer.lettersUsed,

});


/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
// utilizes "connect" functionality from redux in order to infuse state/actions as props to child component
export default withRouter(connect(
    mapStateToProps
)(HiddenLetter));