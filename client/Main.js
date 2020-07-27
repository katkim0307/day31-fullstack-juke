import React from 'react';
// import '../../public/style.css';
import { Sidebar, Player, AllAlbums } from './components'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [
        {
          "id": 1,
          "name": "No Dummy",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        },
        {
          "id": 2,
          "name": "I React to State",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        }
       ],
    }
  };

  render() {
    const { dummyData } = this.state;
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums albums={dummyData}/>
        <Player />
      </div>
    );
  };
};
