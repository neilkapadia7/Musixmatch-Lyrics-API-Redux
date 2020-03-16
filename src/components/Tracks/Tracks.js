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
        return <h3>No Items Searched</h3>
    }
    if(loading && songs === null) {
        return <h3>loading...</h3>
    }
    return (
        <div>
            {songs.message.body.track_list.map(song =>
                <Fragment key={song.track.track_id}>
                    <div style={{paddingTop: 30}} >
                        <h3>{song.track.track_name}</h3>
                        <h5>{song.track.album_name}</h5>
                        <p>{song.track.artist_name}</p>
                        <Link to={`lyrics/${song.track.track_id}`}>View Lyrics</Link>
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
