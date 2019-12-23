import React from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';
import PlayerForm from '../PlayerForm/PlayerForm';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import './PlayerCardContainer.scss';

class PlayerCardContainer extends React.Component {
  state = {
    players: [],
    editMode: false,
    showPlayerForm: false,
  }

  componentDidMount() {
    this.getPlayerData();
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

  createPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayerData();
        this.setState({ showPlayerForm: false });
      })
      .catch((errFromCreatePlayer) => console.error(errFromCreatePlayer));
    this.setState({ imageUrl: '', name: '', position: '' });
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  setCancelPlayerCreation = () => {
    this.setState({ showPlayerForm: false });
  }

  render() {
    const { players } = this.state;
    return (
      <div className="container teamContainer">
        <h2>My Team</h2>
        <button className="btn btn-dark mt-2" onClick={this.setShowPlayerForm}>Add New Player</button>
        { this.state.showPlayerForm
          && <PlayerForm
              createPlayer={this.createPlayer}
              editMode={this.state.editMode}
              setCancelPlayerCreation={this.setCancelPlayerCreation} />
        }
        <div className="container row justify-content-center">
        { players.map((player) => <PlayerCard key={player.id} player={player} deletePlayer={this.deletePlayer} />)}
        </div>
      </div>
    );
  }
}

export default PlayerCardContainer;
