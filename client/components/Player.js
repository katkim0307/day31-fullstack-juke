import React from 'react';

const Player = (props) => {
    return (
        <div id='player-container'>
          <div id='player-controls'>
            <div className='row center'>
              <i className='fa fa-step-backward' onClick={() => props.prevSong()}></i>
              <i className='fa fa-pause-circle' onClick={() => {props.pause(); props.handlePlayButton(null)}}></i>
              <i className='fa fa-step-forward' onClick={() => props.nextSong()}></i>
            </div>
          </div>
        </div>
    );
};

export default Player;