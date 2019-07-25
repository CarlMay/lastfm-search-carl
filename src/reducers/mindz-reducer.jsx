import {
    SEARCH_RELEASES,
    SEARCH_ARTIST,
    ADD_RELEASE_TO_FAVORITES,
    REMOVE_RELEASE_FROM_FAVORITES,
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
            const data = action.payload.artists;
            return {...state, artists: data};
        }
        case ADD_RELEASE_TO_FAVORITES: {
            const {releaseId, artistId} = action.payload;

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
            const {releaseId} = action.payload;
            const filteredFavourites = state.favoriteReleases.filter(item => item.releaseId !== releaseId);

            return {
                ...state,
                favoriteReleases: filteredFavourites,
            };
        }
        default:
            return state;
    }
};
