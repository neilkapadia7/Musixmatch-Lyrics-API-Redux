import { 
    SET_LOADING, GET_TRACKS, GET_LYRICS, REMOVE_TRACKS, REMOVE_LYRICS 
} from './types';
import axios from 'axios';

export const getTracks = track_name => async dispatch => {
    try {   
        dispatch({type: SET_LOADING});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${track_name}&page_size=10&page=1&s_track_rating=desc&apikey=e056afa2781a95283a822173d23cdfec`, config);
        dispatch({ type: GET_TRACKS, payload: res.data });
    } 
    catch (err) {
        console.log(err);
    }
}

export const getLyrics = id => async dispatch =>{
    try {
        dispatch({type: SET_LOADING});
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=e056afa2781a95283a822173d23cdfec`, config);
        dispatch({ type: GET_LYRICS, payload: res.data });
    } 
    catch (err) {
        console.log(err);
    }
}

export const removeTracks = () => dispatch =>{
    dispatch({type: REMOVE_TRACKS});
}
export const removeLyrics = () => dispatch =>{
    dispatch({type: REMOVE_LYRICS});
}