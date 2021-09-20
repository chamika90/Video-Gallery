import {Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {EndPoints} from '../config/constants';
import {AxiosInstance} from './AxiosInstance';
import {AxiosResponse} from 'axios';

//Get Music Video List
export const requestMusicVideoList = async () => {
  const isNetworkAvailable = await (await NetInfo.fetch()).isConnected;

  if (!isNetworkAvailable) {
    Alert.alert('NO INTERNET', 'Please check your internet connection');
    return;
  }

  return AxiosInstance.get(`${EndPoints.MUSIC_VIDEO_LIST}`).then(
    (res: AxiosResponse) => {
      return res;
    },
  );
};
