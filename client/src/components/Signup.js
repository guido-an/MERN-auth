import React, {Component} from 'react';
import {signup} from '../api/authService';

export default class Signup extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    signup(this.state) 
    // this.props.getUser(this.state)
    this.props.history.push('/')
  };
  render() {

    return (
      <div>
          <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder="name" name="username" />
          <input onChange={this.handleChange} type="password" name="password" />
          <button>Signup</button>
        </form>
       
      </div>
    );
  }
}
