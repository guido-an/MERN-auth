import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import {loggedin} from './api/authService';
import ProtectedRoute from './components/ProtectedRoute';
import Private from './components/Private';

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  getTheUser = user => {
    this.setState({
      loggedInUser: user,
    });
  };

  fetchUser = async () => {
      try {
        const res = await loggedin();
        this.setState({
          loggedInUser: res,
        });
      } catch {
        this.setState({
          loggedInUser: null,
        });
      }
  };

  componentDidMount(){
    this.fetchUser(); 
  }

  render() {
   
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <Navbar
              {...props}
              getUser={this.getTheUser}
              loggedinUser={this.state.loggedInUser}
            />
          )}
        />
        <Switch>
          <Route
            path="/auth/signup"
            render={props => <Signup {...props} getUser={this.getTheUser} />}
          />
          <Route
            path="/auth/login"
            render={props => <Login {...props} getUser={this.getTheUser} />}
          />
          <ProtectedRoute
            user={this.state.loggedInUser}
            path="/private"
            component={Private}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
