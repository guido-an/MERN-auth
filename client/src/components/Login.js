import React, {Component} from 'react';
import {login} from '../api/authService';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {username, password} = this.state;
    login({username: username, password: password});
    this.props.getUser(this.state)
    
    this.props.history.push('/private')
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="name"
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="password"
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
