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
    REMOVE_RELEASE_FROM_FAVORITES,
    REMOVE_ARTIST_FROM_SHORTLIST,
} from './types';


// Last.fm API
export const searchLastFmArtist = (searchArtist) => async (dispatch) => {

    // https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&categoryId=4d4b7105d754a06374d81259&radius=100&limit=5&client_id=X&client_secret=X&v=.
    // 0VZCC5ROXEM52CRE5Q4VMZZCPRRLPVT0HABHL0UUOLVSEBXC
    // 5KISIBY0CLV1OR2EFXB2LQ2C1C1XGPLUZKSDLZXJV4ZZR13G


    const key = '850a15314ce90b4721eb773a648ba8bb';
    const {searchText:artist} = searchArtist;
    const response = await lastFm.get(`?method=artist.search&artist=${artist}&api_key=${key}&format=json`);

    // console.log('---response', response);
    const data = response.data;
    // const data = response.data.results.artistmatches.artist;

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

export const removeFromLastFmShortlist = (artist) => (dispatch) => {
    dispatch({
        type: REMOVE_ARTIST_FROM_SHORTLIST,
        payload: artist
    });
};

export const fetchLastFmShortlist = () => (dispatch) => {
    dispatch({
        type: FETCH_SHORTLIST,
    });
};


export const fetchLastFmFavorites = () => (dispatch) => {
    dispatch({
        type: FETCH_FAVORITES,
    });
};


export const removeFromLastFmFavorites = (artist) => (dispatch) => {
    dispatch({
        type: REMOVE_ARTIST_TO_FAVORITES,
        payload: artist
    });
};


export const addToLastFmFavorites = (artist) => (dispatch) => {
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

    dispatch({
        type: SEARCH_RELEASES,
        payload: ArtistReleases,
    });
};

export const addToMindzFavorites = (release) => (dispatch) => {
    dispatch({
        type: ADD_RELEASE_TO_FAVORITES,
        payload: release
    });
};

export const removeFromMindzFavorites = (release) => (dispatch) => {
    dispatch({
        type: REMOVE_RELEASE_FROM_FAVORITES,
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
