import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import Navbar from '../components/Navbar/Navbar';
import PlayerCardContainer from '../components/PlayerCardContainer/PlayerCardContainer';

import './App.scss';

firebaseConnection.firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Navbar authed={authed}/>
        {
          authed && (<PlayerCardContainer />)
        }
      </div>
    );
  }
}

export default App;
