import React from 'react';

class Private extends React.Component {

    state = {
        loggedInUser: this.props.loggedInUser
    }
  render() {
      console.log(this.state.loggedInUser, "privaye")
    return (
      <div>
        <h1>SECRET PAGE</h1>
        <p>Hello {this.state.loggedInUser.username}</p>
      </div>
    );
  }
}

export default Private;
