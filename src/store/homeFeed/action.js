import { INCREMENT, INCREMENT_SUCCESS, FETCH_HOME_FEED, FETCH_HOME_FEED_SUCCESS, FETCH_HOME_FEED_FAIL} from './actionTypes';

export const fetchHomeFeed = () => ({
    type: FETCH_HOME_FEED
});

export const fetchHomeFeedSuccess = () => ({
    type: FETCH_HOME_FEED_SUCCESS
});

export const fetchHomeFeedFail = () => ({
    type: FETCH_HOME_FEED_FAIL
});
