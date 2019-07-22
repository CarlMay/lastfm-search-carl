import {
    SEARCH_RELEASES,
    SEARCH_ARTIST,
    // SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
    artists: [],
    releases: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_RELEASES: {
            const data = action.payload;
            return {...state, releases: data};
        }
        case SEARCH_ARTIST: {
            // console.log('---SEARCH_ARTIST', action.payload.artists);
            const data = action.payload.artists;
            return {...state, artists: data};
        }
        // case SIGN_OUT:
        //     return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};
