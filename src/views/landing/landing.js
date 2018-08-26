import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

export default class Landing extends Component {
    componentWillMount() {
        this.props.getWords()
    }
    render() {

        return (
            <div className={'landing-page-body'} >
                <Link to='/playTime'> <button className={'landing-page-button'} >Lets Play!</button></Link>
            </div>
        )
    }
}