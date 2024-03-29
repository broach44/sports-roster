import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }


  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg bg-dark">
          <span className="navbar-brand" href="#">Create-A-Team</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
            { authed ? (<button className="nav-link btn btn-outline-warning" onClick={this.logMeOut}>Logout</button>)
              : (<Auth />)
            }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
