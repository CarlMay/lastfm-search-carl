import {
    SEARCH_LAST_FM_ARTIST,
    ADD_ARTIST_TO_SHORTLIST,
    FETCH_SHORTLIST,
    FETCH_FAVORITES,
    ADD_ARTIST_TO_FAVORITES,
    REMOVE_ARTIST_TO_FAVORITES,
    REMOVE_ARTIST_FROM_SHORTLIST,
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
            const data = action.payload.results.artistmatches.artist;
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
            const isDuplicate = !!(state.shortlist.find(item => item.id === mbid));


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
        case REMOVE_ARTIST_FROM_SHORTLIST: {
            const {mbid} = action.payload;
            const filteredShortlist = state.shortlist.filter(item => item.id !== mbid);

            return {
                ...state,
                shortlist: filteredShortlist,
            };
        }
        default:
            return state;
    }
};