import React, { Component } from 'react';
import Form from './settings_components/form/form_container';
import './settings.css';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: false
        };
        this.toggleForm = this.toggleForm.bind(this);
    };
    toggleForm() {
        this.setState({ form: (!this.state.form) });
    };
    renderForm() {
        switch (this.state.form) {
            default:
                return null;
            case true:
                return <Form toggle={this.toggleForm} />;
        }
    };
    render() {
        return (
            <div className={'settings-body'} >
                <div className={'settings-button'} onClick={this.toggleForm} >Settings &#x2699;</div>
                {this.renderForm()}
            </div>
        )
    }
}