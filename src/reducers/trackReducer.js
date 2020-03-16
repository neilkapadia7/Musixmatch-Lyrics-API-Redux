import { GET_TRACKS, SET_LOADING, GET_LYRICS, REMOVE_LYRICS, REMOVE_TRACKS } from "../actions/types";

const initialState = {
    songs: null,
    loading: false,
    lyrics: null,
    keyword: null
}

export default (state = initialState , action) => {
    switch(action.type) {
        case GET_TRACKS:
            return {
                ...state,
                songs: action.payload,
                loading: false
            }      
        case GET_LYRICS:
            return {
                ...state,
                lyrics: action.payload,
                loading: false
            }  
        case REMOVE_LYRICS:
            return {
                ...state,
                lyrics: null,
                loading: false
            }
        case REMOVE_TRACKS:
            return {
                ...state,
                songs: null,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}