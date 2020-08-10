import React from 'react';
// import '../../public/style.css';
import { Sidebar, Player, AllAlbums, SingleAlbum, Songs } from './components'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      artists: [],
      singleAlbum: {},
      loading: true,
    }
    this.goBackToAllAlbums = this.goBackToAllAlbums.bind(this);
    this.viewSingleAlbum = this.viewSingleAlbum.bind(this);
  };

  async componentDidMount() {
    try {
      const albumsRes = await fetch('/api/albums', { method: 'GET' });
      const albumsData = await albumsRes.json();
      const artistsRes = await fetch('/api/artists', { method: 'GET' });
      const artistsData = await artistsRes.json();
      // console.log(albumsData);
      this.setState({
        albums: albumsData,
        artists: artistsData,
        loading: false,
      })
      console.log(this.state.singleAlbum);
    } catch (err) { console.error('ERROR: ', err); }
  };

  goBackToAllAlbums() {
    this.setState({
      singleAlbum: {},
    });
  };

  async viewSingleAlbum(albumId) {
    try {
      const singleAlbum = await fetch(`/api/albums/${albumId}`, { method: 'GET' });
      const singleAlbumData = await singleAlbum.json();
      console.log(singleAlbumData);
      this.setState({
        singleAlbum: singleAlbumData,
      })
    } catch (err) {
      console.error('ERROR: ', err);
    }
  };

  render() {
    const { albums, singleAlbum, artists, loading } = this.state;
    if (albums.length === 0) { return <div>No Album Found!</div> }
    if (artists.length === 0) { return <div>No Artist Found!</div> }
    if (loading) { return <div>Loading...</div> }

    return (
      <div id='main' className='row container'>
        <Sidebar goBackToAllAlbums={this.goBackToAllAlbums} />
        {/* IF SINGLE ALBUM IS NOT POPULATED, STAY ON ALLALBUMS, OTHERWISE GO TO SINGLEALBUM */}
        {Object.keys(singleAlbum).length === 0 ?
          <AllAlbums albums={albums} viewSingleAlbum={this.viewSingleAlbum} />
          : <SingleAlbum singleAlbum={singleAlbum} />}
        <Player />
      </div>
    );
  };
};
