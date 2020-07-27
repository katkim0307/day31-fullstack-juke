import React from 'react';
// import '../../public/style.css';
import { Sidebar, Player, AllAlbums } from './components'

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
      const albumsRes = await fetch('/api/albums');
      const albumsData = await albumsRes.json();
      const artistsRes = await fetch('/api/artists');
      const artistsData = await artistsRes.json();

      this.setState({
        albums: albumsData,
        artists: artistsData,
        loading: false,
      })
    } catch (err) { console.error('ERROR: ', err); }
  };

  render() {
    const { albums, artists, loading } = this.state;
    if (albums.length === 0) { return <div>No Album Found!</div> }
    if (artists.length === 0) { return <div>No Artist Found!</div> }
    if (loading) { return <div>Loading...</div> }
    
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums albums={albums} />
        <Player />
      </div>
    );
  };
};
