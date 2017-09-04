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
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          {isAuthenticated ?
            <ul className="uk-navbar-nav">
              <NavLink activeClassName="uk-active" to='/games'><li>Games</li></NavLink>
              <li><span onClick={this.handleLogout}>Logout</span></li>
            </ul>
            : 
            <ul className="uk-navbar-nav">
              <NavLink activeClassName="uk-active" to='/login'>Login</NavLink>
              <NavLink activeClassName="uk-active" to='/signup'>Signup</NavLink>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;
