import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primaryBackgroundColor,
  },
  videoListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListMessage: {
    color: colors.secondaryImageBackgroundColor,
  },
  searchBarContainer: {
    margin: 5,
  },
  dropDownButtonStyle: {
    width: '60%',
    borderRadius: 6,
  },
});

export default styles;
