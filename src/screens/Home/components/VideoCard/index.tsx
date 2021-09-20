import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import {IMusicVideo} from '../../../../types/storeType';
import {theme} from '../../../../config/theme';

const {colors} = theme;

interface VideoCardProps {
  photo: IMusicVideo;
  onSelectItem: (photo: IMusicVideo) => void;
}

// Video Card Component
const VideoCard: React.FC<VideoCardProps> = ({photo, onSelectItem}) => {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => onSelectItem(photo)}>
      <FastImage
        style={styles.image}
        source={{
          uri: photo.image_url,
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.normal,
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.artist} numberOfLines={2}>
          {photo.artist}
        </Text>
        <Text style={styles.title}>{photo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    width: 150,
    height: 150,
    backgroundColor: colors.secondaryImageBackgroundColor,
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListMessage: {
    color: colors.secondaryImageBackgroundColor,
  },
  infoContainer: {
    margin: 5,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artist: {
    color: colors.primaryTextColor,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    color: colors.primaryTextColor,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default VideoCard;
