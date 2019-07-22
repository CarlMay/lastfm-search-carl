// import streams from '../apis/streams';
import mindz from '../apis/mindz';
import lastFm from '../apis/last-fm';
// import lastFmAuth from '../apis/last-fm-auth';

import {
    // SIGN_IN,
    // SIGN_OUT,
    // CREATE_STREAM,
    SEARCH_RELEASES,
    SEARCH_ARTIST,
    SEARCH_LAST_FM_ARTIST,
    ADD_ARTIST_TO_SHORTLIST,
    FETCH_SHORTLIST,
    // FETCH_STREAMS,
    // DELETE_STREAM,
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





// MusicMindz API
export const searchReleases = (artistId) => async (dispatch) => {
    const response = await mindz.get(`release/?query=arid:${artistId}`);

    dispatch({
        type: SEARCH_RELEASES,
        payload: response.data.releases
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
