// @flow
import React, { Component, PropTypes } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logout(this.props.history);
  }

  render() {
    const { pathname } = this.props.location;
    const { isAuthenticated } = this.props;

    return (
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="#">Hanabi</a>
        </div>
        <div className="uk-navbar-right">
          {isAuthenticated ?
            <ul className="uk-navbar-nav">
              <li className={pathname === '/games' ? 'uk-active' : null}><NavLink to='/games'>Games</NavLink></li>
              <li><a href="" onClick={this.handleLogout}>Logout</a></li>
            </ul>
            : 
            <ul className="uk-navbar-nav">
              <li className={pathname === '/login' ? 'uk-active' : null}><NavLink to='/login'>Login</NavLink></li>
              <li className={pathname === '/signup' ? 'uk-active' : null}><NavLink to='/signup'>Signup</NavLink></li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
