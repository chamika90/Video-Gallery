import {StyleSheet} from 'react-native';
import {theme} from '../../config/theme';

const {colors} = theme;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primarySearchBarBackgroundColor,
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 6,
  },
  input: {
    flex: 3,
    //backgroundColor: 'green',
  },
  eyeIcon: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
