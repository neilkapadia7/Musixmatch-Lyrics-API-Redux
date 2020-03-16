import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeTracks} from '../../actions/trackActions';

const Tracks = ({tracks: {loading, songs}, removeTracks}) => {
    
    useEffect(() => {
        return() => {
            removeTracks();
        }

        // eslint-disable-next-line
    }, []);

    if(!loading && songs === null) {
        return <center><h3 className='error-title'>No Items Searched</h3></center>
    }
    if(loading && songs === null) {
        return <center><h3 className='error-title'>Loading...</h3></center>
    }
    return (
        <div className='track-div'>
            {songs.message.body.track_list.map(song =>
                <Fragment key={song.track.track_id}>
                    <div className='track-box'>
                        <div style={{padding: 30}}>
                            <h3>{song.track.track_name}</h3>
                            <h5>{song.track.album_name}</h5>
                            <p>{song.track.artist_name}</p>
                            <Link to={`lyrics/${song.track.track_id}`}>View Lyrics</Link>
                        </div>
                    </div>
                </Fragment>    
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    tracks: state.tracks,
});

export default connect(mapStateToProps, {removeTracks})(Tracks);
