import mindz from '../apis/mindz';
import lastFm from '../apis/last-fm';

import {
    SEARCH_RELEASES,
    SEARCH_ARTIST,
    SEARCH_LAST_FM_ARTIST,
    ADD_ARTIST_TO_SHORTLIST,
    FETCH_SHORTLIST,
    FETCH_FAVORITES,
    REMOVE_ARTIST_TO_FAVORITES,
    ADD_ARTIST_TO_FAVORITES,
    ADD_RELEASE_TO_FAVORITES,
    // REMOVE_RELEASE_FROM_FAVORITES,
} from './types';


// Last.fm API
export const searchLastFmArtist = (artist) => async (dispatch) => {
    const key = '850a15314ce90b4721eb773a648ba8bb';
    const response = await lastFm.get(`?method=artist.search&artist=${artist}&api_key=${key}&format=json`);
    const data = response.data.results.artistmatches.artist;

    dispatch({
        type: SEARCH_LAST_FM_ARTIST,
        payload: data
    });
};

export const addToLastFmShortlist = (artist) => (dispatch) => {
    dispatch({
        type: ADD_ARTIST_TO_SHORTLIST,
        payload: artist
    });
};

export const fetchLastFmShortlist = () => (dispatch) => {
    dispatch({
        type: FETCH_SHORTLIST,
    });
};


export const fetchLastFmFavorites = () => (dispatch) => {
    console.log('---fetchLastFmFavorites');
    dispatch({
        type: FETCH_FAVORITES,
    });
};


export const removeFromLastFmFavorites = (artist) => (dispatch) => {
    console.log('---removeFromLastFmFavorites', artist);
    dispatch({
        type: REMOVE_ARTIST_TO_FAVORITES,
        payload: artist
    });
};

export const addToLastFmFavorites = (artist) => (dispatch) => {
    console.log('---action addToLastFmFavorites', artist);
    dispatch({
        type: ADD_ARTIST_TO_FAVORITES,
        payload: artist
    });
};





// MusicMindz API
export const searchReleases = (artistId) => async (dispatch) => {
    const response = await mindz.get(`release/?query=arid:${artistId}`);
    const ArtistReleases = {
        [artistId]: response.data.releases,
    };

    // const ArtistReleases = `${artistId}: ${response.data.releases}`;
    console.log('---ArtistReleases', ArtistReleases);

    dispatch({
        type: SEARCH_RELEASES,
        payload: ArtistReleases,
    });
};

export const addToMindzFavorites = (release) => (dispatch) => {
    console.log('---action addToMindzFavorites', release);
    dispatch({
        type: ADD_RELEASE_TO_FAVORITES,
        payload: release
    });
};




export const searchArtist = (term) => async (dispatch) => {
    const response = await mindz.get('artist/?', {
        params: {query: term},
    });

    dispatch({
        type: SEARCH_ARTIST,
        payload: response.data
    });
};

// export const createStream = (formValues) => async (dispatch) => {
//     const response = await streams.post('/streams', formValues);
//
//     dispatch({
//         type: CREATE_STREAM,
//         payload: response.data
//     });
// };

// export const fetchStreams = () => async (dispatch) => {
//     const response = await streams.post('/streams',);
//
//     dispatch({
//         type: FETCH_STREAMS,
//         payload: response.data
//     });
// };

// export const deleteStream = (id) => async (dispatch) => {
//     const response = await streams.delete(`/streams/${id}`);
//
//     dispatch({
//         type: DELETE_STREAM,
//         payload: id
//     });
// };
