import React from 'react';
import '../public/style.css';

const AllAlbums = () => {
    return (
        <div class='container'>
            <div id='albums' className='row wrap'>
                <div class='album'>
                    <a>
                        <img src='default-album.jpg' />
                        <p>ALBUM 1</p>
                        <small>Artist Name</small>
                    </a>
                </div>
                <div className='album'>
                    <a>
                        <img src='default-album.jpg' />
                        <p>ALBUM 2</p>
                        <small>Artist Name</small>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AllAlbums;
