import streams from '../apis/streams';
import mindz from '../apis/mindz';

import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    SEARCH_RELEASES,
    SEARCH_ARTIST,
    FETCH_STREAMS,
    DELETE_STREAM,
} from './types';

export const searchReleases = (artistId) => async (dispatch) => {
    const response = await mindz.get(`artist/${artistId}?inc=release-groups`);

    console.log('---SEARCH_RELEASES', response);
    console.log('---SEARCH_RELEASES::: release-groups', response.data['release-groups']);

    dispatch({
        type: SEARCH_RELEASES,
        payload: response.data['release-groups']
    });
};

export const searchArtist = (term) => async (dispatch) => {
    // const response = await mindz.put(`release/?/${term}`);
    const response = await mindz.get('artist/?', {
        params: {query: term},
    });

    dispatch({
        type: SEARCH_ARTIST,
        payload: response.data
    });
};

export const createStream = (formValues) => async (dispatch) => {
    const response = await streams.post('/streams', formValues);

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
};

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.post('/streams',);

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
};

export const deleteStream = (id) => async (dispatch) => {
    const response = await streams.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    });
};
