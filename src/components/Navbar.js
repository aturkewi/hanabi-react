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

  handleLogout = event => {
    event.preventDefault();
    this.props.logout(this.context.router);
  }

  render() {
    const { pathname } = this.context.router.route.location;
    console.log(pathname)
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

export default Navbar;
