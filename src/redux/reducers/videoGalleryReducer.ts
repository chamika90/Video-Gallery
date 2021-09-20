import {Reducer} from 'redux';
import {
  getMusicListAction,
  saveMusicListAction,
} from '../../types/actionsTypes';
import {IMusicVideoList} from '../../types/storeType';

const initialState: IMusicVideoList = {genres: undefined, videos: undefined};

const videoGalleryReducer: Reducer<
  IMusicVideoList,
  getMusicListAction | saveMusicListAction
> = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_MUSIC_VIDEOS':
      return {genres: action.videoList.genres, videos: action.videoList.videos};

    default:
      return {...state};
  }
};

export default videoGalleryReducer;
