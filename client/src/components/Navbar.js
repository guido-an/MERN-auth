import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../api/authService';

class NavBar extends React.Component {
  state = {loggedInUser: null};

  componentWillReceiveProps(nextProps) { 
    this.setState({
      loggedInUser: nextProps.loggedinUser,
    });
  }

  logoutUser = () =>{
    logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  render() {
    console.log(this.state.loggedInUser)
    return (
      <header>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/auth/signup">Signup</Link>
        </p>
        <p>
          <Link to="/auth/login">Login</Link>
        </p>
        <p>
          <Link to="#" onClick={this.logoutUser}>
            Logout
          </Link>
        </p>
        <p>
          <Link to="/private">
            Private
          </Link>
        </p>
        {this.state.loggedInUser && (
          <p>Hello {this.state.loggedInUser.username}</p>
        )}
      </header>
    );
  }
}

export default NavBar;
