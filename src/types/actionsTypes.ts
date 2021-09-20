import {IMusicVideoList} from './storeType';

export interface getMusicListAction {
  type: 'GET_MUSIC_VIDEOS';
}

export interface saveMusicListAction {
  type: 'SAVE_MUSIC_VIDEOS';
  videoList: IMusicVideoList;
}
