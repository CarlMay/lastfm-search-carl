import {
    SEARCH_LAST_FM_ARTIST,
    ADD_ARTIST_TO_SHORTLIST,
    FETCH_SHORTLIST,
    FETCH_FAVORITES,
    ADD_ARTIST_TO_FAVORITES,
    REMOVE_ARTIST_TO_FAVORITES,
} from '../actions/types';

const INITIAL_STATE = {
    artists: [],
    releases: [],
    shortlist: [],
    favoritesArtists: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_LAST_FM_ARTIST: {
            const data = action.payload;
            return {...state, artists: data};
        }
        case ADD_ARTIST_TO_FAVORITES: {
            const {id, name} = action.payload;

            return Object.assign({}, state, {
                favoritesArtists: [
                    ...state.favoritesArtists,
                    {
                        id: id,
                        name: name,
                    }
                ]
            })
        }
        case REMOVE_ARTIST_TO_FAVORITES: {
            const {id} = action.payload;
            const filteredFavourites = state.favoritesArtists.filter(item => item.id !== id);

            return {
                ...state,
                favoritesArtists: filteredFavourites,
            };
        }
        case FETCH_FAVORITES:
        case FETCH_SHORTLIST: {
            return {...state};
        }
        case ADD_ARTIST_TO_SHORTLIST: {
            const {mbid, name} = action.payload;
            const isDuplicate = !!(state.shortlist.find(item => item.mbid !== mbid));

            if(isDuplicate) return state;

            return {
                ...state,
                shortlist: [
                    ...state.shortlist,
                    {
                        id: mbid,
                        name: name,
                    }
                ]
            };
        }
        default:
            return state;
    }
};