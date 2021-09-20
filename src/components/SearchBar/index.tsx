import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {theme} from '../../config/theme';

const {colors} = theme;

interface Props {
  placeholder: string;
  onTextChange: (value: string) => void;
}

/*
 * Custom Input
 */
const SearchBar: React.FC<Props> = ({placeholder, onTextChange}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={text => onTextChange(text)}
      />
      <TouchableOpacity style={styles.eyeIcon}>
        <Icon name={'search'} size={16} color={colors.primaryIconTintColor} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
