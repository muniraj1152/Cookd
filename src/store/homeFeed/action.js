import { FETCH_HOME_FEED, FETCH_HOME_FEED_SUCCESS, FETCH_HOME_FEED_FAIL, FETCH_FILTER_CATEGORY_LIST, FETCH_FILTER_CATEGORY_LIST_SUCCESS, FETCH_FILTER_CATEGORY_LIST_FAIL} from './actionTypes';

export const fetchHomeFeed = () => ({
    type: FETCH_HOME_FEED
});

export const fetchHomeFeedSuccess = (payload) => ({
    type: FETCH_HOME_FEED_SUCCESS,
    payload
});

export const fetchHomeFeedFail = () => ({
    type: FETCH_HOME_FEED_FAIL
});

export const fetchFilterCategoryList = () => ({
    type: FETCH_FILTER_CATEGORY_LIST
});

export const fetchFilterCategoryListSuccess = (payload) => ({
    type: FETCH_FILTER_CATEGORY_LIST_SUCCESS,
    payload
});

export const fetchFilterCategoryListFail = () => ({
    type: FETCH_FILTER_CATEGORY_LIST_FAIL
});
