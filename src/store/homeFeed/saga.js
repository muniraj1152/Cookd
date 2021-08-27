import axios from 'axios';

import {all, call, put, takeLatest} from 'redux-saga/effects';
import {fetchHomeFeedSuccess } from './action';
import { INCREMENT, FETCH_HOME_FEED } from './actionTypes';

const fetchHomeFeedCollection = () =>
  axios.get(
    'https://cookdtv.herokuapp.com/cookd.postman_collection.json'
  );

function* fetchHomeFeed() {
    const response = yield call(fetchHomeFeedCollection);
    console.log('response---', response);
    yield put(fetchHomeFeedSuccess())
}

function* homeFeedSaga() {
    yield all([
        takeLatest(FETCH_HOME_FEED, fetchHomeFeed),
    ])
}

export default homeFeedSaga;