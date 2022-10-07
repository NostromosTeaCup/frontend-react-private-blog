import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Overview from './pages/Overview';
import Home from './pages/Home';
import Login from './pages/Login';
import BlogPost from './pages/BlogPost';
import Navigation from './components/Navigation';

function PrivateRoute({ children, isAuth, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login" />}
        </Route>
    )
}

function App() {
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

    return (
        <div>
            <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login toggleAuth={toggleIsAuthenticated} />
                </Route>
                <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                    <Overview />
                </PrivateRoute>
                <PrivateRoute exact path="/blog/:blogId" isAuth={isAuthenticated}>
                    <BlogPost />
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;