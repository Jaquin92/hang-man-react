import React, { Component } from 'react';
import Settings from './landing_components/settings/settings';
import { Link } from 'react-router-dom';
import './landing.css';

export default class Landing extends Component {
    componentWillMount() {
        this.props.getWords(1)
    }
    render() {

        return (
            <div className={'landing-page-body'} >
                <Link to='/playTime'> <button className={'landing-page-button'} >Lets Play!</button></Link>
                <Settings />
            </div>
        )
    }
}