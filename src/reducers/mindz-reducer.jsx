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
            const {releaseId, artistId} = action.payload;

            // Object.keys(state.favoriteReleases).map((keyName, keyIndex) => {
            //     // use keyName to get current key's name
            //     // and a[keyName] to get its value
            // });

            // const isDuplicate = !!(Object.keys(state.favoriteReleases).includes(releaseId));
            // console.log('---isDuplicate', isDuplicate);
            console.log('---state.favoriteReleases', state.favoriteReleases);

            // if(isDuplicate) return state;

            return {
                ...state,
                favoriteReleases: [
                    ...state.favoriteReleases,
                    {
                        releaseId: releaseId,
                        artistId: artistId,
                    }
                ]
            };
        }
        case REMOVE_RELEASE_FROM_FAVORITES: {
            const {id} = action.payload;
            const filteredFavourites = state.favoriteReleases.filter(item => item.id !== id);

            return {
                ...state,
                favoriteReleases: filteredFavourites,
            };
        }
        // case SIGN_OUT:
        //     return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
};
