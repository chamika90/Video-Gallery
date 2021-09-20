import {combineReducers} from 'redux';
import videoGalleryReducer from './videoGalleryReducer';

export default combineReducers({
  galleryReducer: videoGalleryReducer,
});
