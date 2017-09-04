// @flow
import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
}

class Navbar extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogout = () => this.props.logout(this.context.router);

  render() {
    const { isAuthenticated } = this.props

    return (
      <div>
        {isAuthenticated ?
          <div>
            <NavLink to='/games'>Games</NavLink>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
          : 
          <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
          </div>
        }
      </div>
    );
  }
}

export default Navbar;
