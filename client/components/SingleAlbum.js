import React from 'react';
import Songs from './Songs.js';

export default function SingleAlbum (props) {
    // console.log(props.singleAlbum);
    return (
        <div className='container'>

          {/* <!-- Single Album --> */}
          <div id='single-album' className='column'>
            <div className='album'>
              <a>
                <img src='default-album.jpg' />
                <p>{props.singleAlbum.name}</p>
                <small>{props.singleAlbum.artist.name}</small>
              </a>
            </div>
            <Songs songs={props.singleAlbum.songs} artist={props.singleAlbum.artist} playSong={props.playSong}/>
          </div>

        </div>
    );
};