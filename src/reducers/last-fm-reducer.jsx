import {
    SEARCH_LAST_FM_ARTIST,
    ADD_ARTIST_TO_SHORTLIST,
} from '../actions/types';

const INITIAL_STATE = {
    artists: [],
    releases: [],
    shortlist: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_LAST_FM_ARTIST: {
            // console.log('---SEARCH_LAST_FM_ARTIST', action.payload);
            const data = action.payload;
            return {...state, artists: data};
        }
        case ADD_ARTIST_TO_SHORTLIST: {
            // console.log('---ADD_ARTIST_TO_SHORTLIST', action.payload, state.shortlist);
            const {mbid, name} = action.payload;

            return Object.assign({}, state, {
                shortlist: [
                    ...state.shortlist,
                    {
                        id: mbid,
                        name: name,
                    }
                ]
            })
        }
        default:
            return state;
    }
};