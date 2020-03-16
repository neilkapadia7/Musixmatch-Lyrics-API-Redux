import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getLyrics, removeLyrics} from '../../actions/trackActions';

const Lyrics = props => {

    const {tracks: {loading, lyrics}, getLyrics, removeLyrics} = props;

    useEffect(() => {
        getLyrics(props.match.params.id);

        return() => {
            removeLyrics();
        }
        // eslint-disable-next-line
    }, []);

    if(loading && lyrics === null) {
        return <center><h4 className='error-title'>Loading...</h4></center>
    }
    if(!loading && lyrics === null) {
        return <center><h4 className='error-title'>Invalid Track</h4></center>
    }

    return (
        <div className='lyrics-div'>
            <h4 className='error-title'>Song Lyrics</h4>
            <p>{lyrics.message.body.lyrics.lyrics_body}</p>
        </div>
    )
}

Lyrics.propTypes = {
    getLyrics: PropTypes.func.isRequired,
    removeLyrics: PropTypes.func.isRequired,
    track: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    tracks: state.tracks
});

export default connect(mapStateToProps, {getLyrics, removeLyrics})(Lyrics);