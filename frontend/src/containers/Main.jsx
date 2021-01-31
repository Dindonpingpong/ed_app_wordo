import React from 'react';
import Header from './Header';
import { Container } from 'reactstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Friends from './Friends';
import Profile from './Profile';
import Settings from './Settings';
import GameCreate from './GameCreate';
import Game from './Game';

const Main = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/game' component={GameCreate} />
                    <Route path='/game/:me/:uuid' component={Game} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </Router>
        </>
    )
}

export default Main;