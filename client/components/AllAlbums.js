import React from 'react';
// import '../../public/style.css';

const AllAlbums = (props) => {
    // console.log(props);
    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
                {props.albums.map(album => {
                    return (
                        <div className='album' key={album.id}>
                            <a>
                                <img src={album.artworkUrl} />
                                <p>{album.name}</p>
                                <small>{album.artist.name}</small>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AllAlbums;
