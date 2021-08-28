import { act } from 'react-test-renderer';
import { FETCH_HOME_FEED_SUCCESS, FETCH_HOME_FEED_FAIL, INCREMENT_SUCCESS, FETCH_FILTER_CATEGORY_LIST_SUCCESS, FETCH_FILTER_CATEGORY_LIST_FAIL } from './actionTypes';

const initialState = {
    homeWidgetFeeds: [],
    filterCategoryList: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HOME_FEED_SUCCESS:
            return {...state, homeWidgetFeeds: action.payload.homeWidgetFeeds}
        case FETCH_HOME_FEED_FAIL:
            return {...state, homeWidgetFeeds: []}
        case FETCH_FILTER_CATEGORY_LIST_SUCCESS:
            return {...state, filterCategoryList: action.payload.filterCategoryList}
        case FETCH_FILTER_CATEGORY_LIST_FAIL:
            return {...state, filterCategoryList: []}
        default:
            return {...state};
    }
}