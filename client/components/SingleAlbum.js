import React from 'react';

const SingleAlbum = (props) => {
    return (
        <div className='container'>
            <div id='single-album' className='column'>
                <div class='album'>
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

export default SingleAlbum;