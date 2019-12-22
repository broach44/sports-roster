import React from 'react';

import playerShape from '../../helpers/propz/playerShape';

class PlayerCard extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card col-3 m-2">
        <img src={player.imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">Position: {player.position}</p>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
