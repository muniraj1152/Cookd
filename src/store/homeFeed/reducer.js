import { FETCH_HOME_FEED_SUCCESS, FETCH_HOME_FEED_FAIL, INCREMENT_SUCCESS } from './actionTypes';

const initialState = {
    homeFeeds: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HOME_FEED_SUCCESS:
            return {...state, homeFeeds: [{id: 1}]}
        case FETCH_HOME_FEED_FAIL:
            return {...state, homeFeeds: []}
        default:
            return {...state};
    }
}