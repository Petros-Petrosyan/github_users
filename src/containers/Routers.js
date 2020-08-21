import React from 'react';

// react router
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

// containers
import {
    Selected,
    GithubUsers,
} from '.';


const Routers = () => {
    return (
        <Switch>
            <Route exact path='/'  component={() => <Redirect to='search' />} />
            <Route exact path='/search' component={GithubUsers} />
            <Route exact path='/selected' component={Selected} />
        </Switch>
    );
};


export { Routers };