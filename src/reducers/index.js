import {combineReducers} from 'redux';
import lyricsReducer from './lyricsReducer';

export default combineReducers({
    lyrics: lyricsReducer
});