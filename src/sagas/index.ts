import {takeLatest} from 'redux-saga/effects';

// import {EActionTypes} from '../redux/actions/types';
import * as videoGallerySaga from './videoGallerySaga';

function* sagas() {
  yield takeLatest('GET_MUSIC_VIDEOS', videoGallerySaga.getMusicVideos);
}

export default sagas;
