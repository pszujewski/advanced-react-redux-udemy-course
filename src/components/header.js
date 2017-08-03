import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

export class Header extends Component {
  
  authBtn() {
    if (this.props.authenticated) {
      return (<button onClick={() => this.props.dispatch(actions.authenticate(false))}>Sign Out</button>);
    }
    return (
      <button onClick={() => this.props.dispatch(actions.authenticate(true))}>Sign In</button>
    );
  }
 
  render() {
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/resources'>Resources</Link>
          </li>
          <li className='nav-item'>
            { this.authBtn() }
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.authenticated,
});

export default connect(mapStateToProps)(Header);