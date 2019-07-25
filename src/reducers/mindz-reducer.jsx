import {
    SEARCH_RELEASES,
    SEARCH_ARTIST,
    ADD_RELEASE_TO_FAVORITES,
    REMOVE_RELEASE_FROM_FAVORITES,
    // SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
    artists: [],
    ArtistReleases: [],
    favoriteReleases: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_RELEASES: {
            const data = action.payload;
            return {
                ...state,
                ArtistReleases: {
                    ...state.ArtistReleases,
                    ...data,
                }
            };

        }
        case SEARCH_ARTIST: {
            // console.log('---SEARCH_ARTIST', action.payload.artists);
            const data = action.payload.artists;
            return {...state, artists: data};
        }
        case ADD_RELEASE_TO_FAVORITES: {
            const {id, name} = action.payload;

            return Object.assign({}, state, {
                favoritesReleases: [
                    ...state.favoritesReleases,
                    {
                        id: id,
                        name: name,
                    }
                ]
            })
        }
        case REMOVE_RELEASE_FROM_FAVORITES: {
            const {id} = action.payload;
            const filteredFavourites = state.favoritesReleases.filter(item => item.id !== id);

            return {
                ...state,
                favoritesReleases: filteredFavourites,
            };
        }
        // case SIGN_OUT:
        //     return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};
