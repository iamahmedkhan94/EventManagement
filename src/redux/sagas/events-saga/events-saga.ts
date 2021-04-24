import {takeLatest, put} from 'redux-saga/effects';
import {
  ADDLISTITEM_REQUEST_REQUEST,
  ADDLISTITEM_REQUEST_SUCCESS,
  DELETE_REQUEST_REQUEST,
  DELETE_REQUEST_SUCCESS,
  UPDATE_REQUEST_REQUEST,
  UPDATE_REQUEST_SUCCESS,
} from '../../actions/types';

function* addRequest() {
  yield takeLatest(ADDLISTITEM_REQUEST_REQUEST, addEvent);
  yield takeLatest(DELETE_REQUEST_REQUEST, deleteEvent);
  yield takeLatest(UPDATE_REQUEST_REQUEST, updateEvent);
}

function* addEvent(params: any) {
  console.log('[login saga]', params);
  try {
    let obj = {
      name: params.title,
      type: params.type,
      description: params.description,
      date: params.date,
    };

    yield put({type: ADDLISTITEM_REQUEST_SUCCESS, data: obj});
    params.nav.navigate('Main');
  } catch (error) {
    console.log('error from login request saga -- > > >  > ', error);
  }
}
function* deleteEvent(params: any) {
  console.log('[login saga]', params);
  try {
    let obj = {
      name: params.title,
      type: params.type,
      description: params.description,
      date: params.date,
    };

    yield put({type: DELETE_REQUEST_SUCCESS, data: params.item});
  } catch (error) {
    console.log('error from login request saga -- > > >  > ', error);
  }
}
function* updateEvent(params: any) {
  console.log('[login saga]', params);
  try {
    let obj = {
      name: params.title,
      type: params.type,
      description: params.description,
      date: params.date,
    };

    yield put({type: UPDATE_REQUEST_SUCCESS, data: obj});
    params.nav.navigate('Main');
  } catch (error) {
    console.log('error from login request saga -- > > >  > ', error);
  }
}

export default addRequest;
