import axios from 'axios';

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchHomeFeedSuccess, fetchFilterCategoryListSuccess } from './action';
import { FETCH_FILTER_CATEGORY_LIST, FETCH_HOME_FEED } from './actionTypes';

const fetchHomeFeedCollection = () =>
  axios.get(
    'https://cookdtv.herokuapp.com/api/v1/home_feed'
  );

const fetchCategoryListCollection = () =>
  axios.get(
    'https://cookdtv.herokuapp.com/api/v1/filters/meal_time/3'
  );

/**
 * To get home widget feed collections (Which contains autoplay, horizontal, vertical list, spotlight, iconList)
 */
function* fetchHomeFeed() {
  const response = yield call(fetchHomeFeedCollection);
  yield put(fetchHomeFeedSuccess({ homeWidgetFeeds: response.data }))
}

function* fetchCategoryList() {
  const response = yield call(fetchCategoryListCollection);
  yield put(fetchFilterCategoryListSuccess({ filterCategoryList: response.data.data }))
}

function* homeFeedSaga() {
  yield all([
    takeLatest(FETCH_HOME_FEED, fetchHomeFeed),
    takeLatest(FETCH_FILTER_CATEGORY_LIST, fetchCategoryList)
  ])
}

export default homeFeedSaga;