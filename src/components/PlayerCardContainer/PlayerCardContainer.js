import React from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import './PlayerCardContainer.scss';

class PlayerCardContainer extends React.Component {
  state = {
    players: [],
  }

  getPlayerData = () => {
    playerData.getAllPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromGetPlayers) => console.error(errFromGetPlayers));
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayerData();
      })
      .catch((errFromDeletePlayer) => console.error(errFromDeletePlayer));
  }

  componentDidMount() {
    this.getPlayerData();
  }

  render() {
    const { players } = this.state;
    return (
      <div className="container teamContainer">
        <h2>My Team</h2>
        <div className="container row justify-content-center">
        { players.map((player) => <PlayerCard key={player.id} player={player} deletePlayer={this.deletePlayer} />)}
        </div>
      </div>
    );
  }
}

export default PlayerCardContainer;
