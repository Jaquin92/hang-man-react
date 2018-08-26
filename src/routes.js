import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './views/landing/landing_container';
import HangMan from './views/hangMan/hangMan_container';
export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/playTime' component={HangMan} />
    </Switch>
)