import {getMusicListAction, saveMusicListAction} from './actionsTypes';
import {IMusicVideoList} from './storeType';

export type getMusicVideoListActionCreator = () => getMusicListAction;
export type saveMusicVideoListActionCreator = (
  videos: IMusicVideoList,
) => saveMusicListAction;
