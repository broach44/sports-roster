import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class PlayerCard extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deletePlayer: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deletePlayer, player } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card col-3 m-2">
        <img src={player.imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">Position: {player.position}</p>
          <button className="btn btn-danger" onClick={this.deletePlayerEvent}>Delete Player</button>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
