import { combineReducers } from 'redux';

import homeFeedReducer from './homeFeed/reducer';

const rootReducer = combineReducers({
    homeFeed: homeFeedReducer
});

export default rootReducer;

