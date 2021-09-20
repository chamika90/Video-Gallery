import {
  getMusicVideoListActionCreator,
  saveMusicVideoListActionCreator,
} from '../../types/actionCreatorTypes';
import {IMusicVideoList} from '../../types/storeType';

export const getMusicVideoList: getMusicVideoListActionCreator = () => {
  return {
    type: 'GET_MUSIC_VIDEOS',
  };
};

export const saveMusicVideoList: saveMusicVideoListActionCreator = (
  videos: IMusicVideoList,
) => {
  return {
    type: 'SAVE_MUSIC_VIDEOS',
    videoList: videos,
  };
};
