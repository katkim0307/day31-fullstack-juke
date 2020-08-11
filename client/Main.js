import React from 'react';
import { Sidebar, Player, AllAlbums, SingleAlbum, Songs } from './components'

const audio = document.createElement('audio');

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      artists: [],
      singleAlbum: {},
      loading: true,
      currentSong: null,
    }
    this.goBackToAllAlbums = this.goBackToAllAlbums.bind(this);
    this.viewSingleAlbum = this.viewSingleAlbum.bind(this);
    this.playSong = this.playSong.bind(this);
    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.pause = this.pause.bind(this);
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

  playSong(songUrl, songId) {
    audio.src = songUrl;
    audio.load();
    audio.play();
  };

  handlePlayButton(songId) {
    this.setState({
      currentSong: songId,
    });
  };

  pause() {
    audio.pause();
  };

  render() {
    const { albums, singleAlbum, currentSong, artists, loading } = this.state;
    if (albums.length === 0) { return <div>No Album Found!</div> }
    if (artists.length === 0) { return <div>No Artist Found!</div> }
    if (loading) { return <div>Loading...</div> }

    return (
      <div id='main' className='row container'>
        <Sidebar goBackToAllAlbums={this.goBackToAllAlbums} />
        {/* IF SINGLE ALBUM IS NOT POPULATED, STAY ON ALLALBUMS, OTHERWISE GO TO SINGLEALBUM */}
        {Object.keys(singleAlbum).length === 0 ?
          <AllAlbums albums={albums} viewSingleAlbum={this.viewSingleAlbum} />
          : <SingleAlbum
            singleAlbum={singleAlbum}
            playSong={this.playSong}
            handlePlayButton={this.handlePlayButton}
            currentSong={currentSong}
            pause={this.pause} />}
        {currentSong !== null ? <Player playSong={this.playSong} handlePlayButton={this.handlePlayButton} pause={this.pause}/> : ''}
      </div>
    );
  };
};
