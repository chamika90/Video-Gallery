import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, View, FlatList, Text} from 'react-native';

import {getMusicVideoList} from '../../redux/actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import styles from './styles';
import {IMusicVideo, IGenre} from '../../types/storeType';
import SearchBar from '../../components/SearchBar';
import VideoCard from './components/VideoCard';
import DetailView from './components/DetailView';
import CustomDropDown from '../../components/CustomDropDown';

//EmptyList Component
const EmptyList = () => {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListMessage}>No Movies Available</Text>
    </View>
  );
};

/*
 * Home Screen
 */
const Home = () => {
  const dispatch = useAppDispatch();
  const genresList = useAppSelector(state => state.galleryReducer.genres);
  const videoList = useAppSelector(state => state.galleryReducer.videos);

  const [filteredVideoList, setFilteredVideoList] = useState<
    IMusicVideo[] | undefined
  >([]);
  const [musicGenresList, setMusicGenresList] = useState<IGenre[] | undefined>(
    [],
  );
  const [selectedVideo, setSelectedVideo] = useState<IMusicVideo | undefined>(
    undefined,
  );
  const [isDetailViewVisible, setDetailViewStatus] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<IGenre | undefined>(
    undefined,
  );
  const [selectedArtist, setSelectedArtist] = useState<string>('');

  // Get Music Video List
  const getMusicVideoInfoList = useCallback(() => {
    dispatch(getMusicVideoList());
  }, [dispatch]);

  useEffect(() => {
    if (genresList === undefined) {
      getMusicVideoInfoList();
    }
    setFilteredVideoList(videoList);
    genresList && setMusicGenresList(genresList);
  }, [videoList, genresList, getMusicVideoInfoList]);

  // Filter video list by Genre
  const filterVideoListByGenre = (arrayToFilter: IMusicVideo[]) => {
    let filteredArrayByGenre: IMusicVideo[];

    filteredArrayByGenre = selectedGenre
      ? arrayToFilter.filter(item => {
          const videoGenreId = item.genre_id.toString();
          const selectedGenreId = selectedGenre.id.toString();

          return videoGenreId.indexOf(selectedGenreId) > -1;
        })
      : arrayToFilter;

    return filteredArrayByGenre;
  };

  // Filter video list by Artist / Title
  const filterVideoListByArtist: (value: string) => IMusicVideo[] | undefined =
    function (value) {
      let filteredArrayByArtist: IMusicVideo[] | undefined;

      if (value !== '' && videoList) {
        filteredArrayByArtist = videoList.filter(item => {
          const artist = item.artist.toString().toUpperCase();
          const title = item.title.toString().toUpperCase();
          const searchData = value.toUpperCase();
          return (
            artist.indexOf(searchData) > -1 || title.indexOf(searchData) > -1
          );
        });
      } else {
        filteredArrayByArtist = videoList;
      }
      return filteredArrayByArtist;
    };

  // Get Video List considering filters
  const getVideoList: () => void = function () {
    const filteredListByArtist: IMusicVideo[] | undefined =
      filterVideoListByArtist(selectedArtist);
    let filteredArray: IMusicVideo[] | undefined;

    if (filteredListByArtist) {
      filteredArray = filterVideoListByGenre(filteredListByArtist);
    } else {
      filteredArray = videoList;
    }
    setFilteredVideoList(filteredArray);
  };

  const onSelectVideo = (video: IMusicVideo) => {
    setSelectedVideo(video);
    toggleDetailView();
  };

  const handleVideoSearch: (value: string) => void = function (value) {
    setSelectedArtist(value);
    getVideoList();
  };

  const toggleDetailView: () => void = function () {
    setDetailViewStatus(!isDetailViewVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder={'Artist or Title'}
          onTextChange={value => {
            handleVideoSearch(value);
          }}
        />
      </View>
      <CustomDropDown
        data={musicGenresList}
        buttonStyle={styles.dropDownButtonStyle}
        renderRowData={(item: IGenre) => {
          return item;
        }}
        onDropdownItemSelect={(selectedItem: any, index: number) => {
          setSelectedGenre(selectedItem);
          getVideoList();
        }}
      />
      <FlatList
        contentContainerStyle={styles.videoListContainer}
        data={filteredVideoList}
        numColumns={2}
        renderItem={({item, index, separators}) => (
          <VideoCard
            key={index}
            photo={item}
            onSelectItem={video => {
              onSelectVideo(video);
            }}
          />
        )}
        ListEmptyComponent={<EmptyList />}
      />
      {selectedVideo && (
        <DetailView
          isVisible={isDetailViewVisible}
          item={selectedVideo}
          onClose={() => {
            toggleDetailView();
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
