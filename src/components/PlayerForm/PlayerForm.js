import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    createPlayer: PropTypes.func,
  }

  state = {
    image: '',
    name: '',
    position: '',
  }

  savePlayerEvent = (e) => {
    const { createPlayer } = this.props;

    e.preventDefault();
    const newPlayer = {
      imageUrl: this.state.imageUrl,
      uid: authData.getUid(),
      name: this.state.name,
      position: this.state.position,
    };
    createPlayer(newPlayer);
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }


  render() {
    const { imageUrl, name, position } = this.state;

    return (
      <form className='col-6 offset-3 PlayerForm'>
        <div className="form-group">
          <label htmlFor="player-image">Player Image Url:</label>
          <input
          type="text"
          className="form-control"
          id="player-image"
          placeholder="https://www.somelinkhere.com/png"
          value={imageUrl}
          onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-name">Player Name:</label>
          <input
          type="text"
          className="form-control"
          id="player-name"
          placeholder="John Smith"
          value={name}
          onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="player-position">Player Position:</label>
          <input
          type="text"
          className="form-control"
          id="player-position"
          placeholder="Goalie"
          value={position}
          onChange={this.positionChange}
          />
        </div>
      <div>
        <button className="btn btn-warning" onClick={this.savePlayerEvent}>Save Player</button>
      </div>
      </form>
    );
  }
}

export default PlayerForm;
