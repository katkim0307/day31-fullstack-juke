import React from 'react';

export default function Song(props) {
    return (
        <table id='songs'>
            <tbody>
                <tr className='gray'>
                    <td />
                    <td>#</td>
                    <td>Name</td>
                    <td>Artist</td>
                    <td>Genre</td>
                </tr>
                {props.songs.map(song => {
                    return (
                        <tr key={song.id} className={song.id === props.currentSong ? 'active' : ''}>
                            <td><i className={props.currentSong !== song.id ? 'fa fa-play-circle' : 'fa fa-pause-circle'}
                                onClick={song.id !== props.currentSong ? () => { props.playSong(song.audioUrl, song.id); props.handlePlayButton(song.id) } : () => { props.pause(); props.handlePlayButton(null) }} /></td>
                            <td>{song.id}</td>
                            <td>{song.name}</td>
                            <td>{props.artist.name}</td>
                            <td>{song.genre}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};