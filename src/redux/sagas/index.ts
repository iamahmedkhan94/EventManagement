import {fork} from 'redux-saga/effects';

import addRequest from './events-saga/events-saga';

// import getDriverCollectionRequest from "./driver-saga/driverCollection-saga";

export default function* rootSaga() {
  yield fork(addRequest);

  // yield fork(getDriverCollectionRequest);
}
