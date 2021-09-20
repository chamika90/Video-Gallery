import React from 'react';
import {View, Text, Linking} from 'react-native';

import BottomModal from '../../../../components/BottomModal';
import styles from './styles';
import {IMusicVideo} from '../../../../types/storeType';

interface DetailViewProps {
  isVisible: boolean;
  item: IMusicVideo;
  onClose: () => void;
}

interface DetailRowProps {
  title: string;
  value: string;
}

const DetailRow: React.FC<DetailRowProps> = ({title, value}) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{title}</Text>
      {(title === 'Web' && (
        <Text
          style={styles.linkText}
          onPress={() => {
            Linking.openURL(value);
          }}>
          {value}
        </Text>
      )) || <Text style={styles.detailValue}>{value}</Text>}
    </View>
  );
};

/*
 * Detail view screen
 */
const DetailView: React.FC<DetailViewProps> = ({isVisible, item, onClose}) => {
  return (
    <BottomModal isVisible={isVisible} onClose={() => onClose()}>
      <View>
        <DetailRow title={'Title'} value={item.title} />
        <DetailRow title={'Artist'} value={item.artist} />
        <DetailRow
          title={'Release Year'}
          value={item.release_year.toString()}
        />
      </View>
    </BottomModal>
  );
};

export default DetailView;
