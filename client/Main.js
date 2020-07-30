import React from 'react';
import { Sidebar, Player, AllAlbums, SingleAlbum, Songs } from './components'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      artists: [],
      loading: true,
    }
  };

  async componentDidMount() {
    try {
      const albumsRes = await fetch('/api/albums', { method: 'GET' });
      const albumsData = await albumsRes.json();
      const artistsRes = await fetch('/api/artists', { method: 'GET' });
      const artistsData = await artistsRes.json();

      this.setState({
        albums: albumsData,
        artists: artistsData,
        loading: false,
      });
    } catch (err) { console.error('ERROR: ', err.stack); }
  };

  render() {
    const { albums, artists, loading } = this.state;
    if (albums.length === 0) { return <div>No Album Found!</div> }
    if (artists.length === 0) { return <div>No Artist Found!</div> }
    if (loading) { return <div>Loading...</div> }
    console.log(albums);
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums albums={albums} />
        <Player />
      </div>
    );
  };
};
