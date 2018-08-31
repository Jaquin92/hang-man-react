import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: 1
        }
        this.submitSettings = this.submitSettings.bind(this);
    };
    toggleDifficulty(val) {
        this.setState({ difficulty: val })
    };
    submitSettings() {
        this.props.getWords(this.state.difficulty);
        this.props.toggle();
    };

    render() {
        return (
            <div className={'form-body'} >
                <h1>Difficulty</h1>
                <form onChange={e => this.toggleDifficulty(e.target.value)} >
                    <input type="radio" name="difficulty" value={1} defaultChecked /> Easy
                <input type="radio" name="difficulty" value={5} /> Medium
                    <input type="radio" name="difficulty" value={10} /> Hard
            </form>
                <div><button onClick={this.props.toggle} >Cancel</button> <button onClick={this.submitSettings} >Submit</button> </div>
            </div>

        )
    };
};