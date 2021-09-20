import {put} from 'redux-saga/effects';
import {requestMusicVideoList} from '../services/ApiService';
import {saveMusicVideoList} from '../redux/actions';

export function* getMusicVideos() {
  try {
    const response = yield requestMusicVideoList().then(resp => {
      return resp;
    });
    yield put(saveMusicVideoList(response));
  } catch (error) {}
}
