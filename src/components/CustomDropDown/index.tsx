import React from 'react';
import {View, Text, ViewStyle, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

interface DropDownProps {
  data: any;
  renderRowData: any;
  buttonStyle: ViewStyle;
  onDropdownItemSelect: (index: string, option: any) => void;
}

/*
 * Custom Drop Down
 */
const CustomDropDown: React.FC<DropDownProps> = ({
  data,
  renderRowData,
  buttonStyle,
  onDropdownItemSelect,
}) => {
  const renderDropdownRow: (
    selectedItem: any,
    index: number,
  ) => React.ReactNode = function (selectedItem, index) {
    return (
      <View key={index} style={styles.content}>
        <Text>{renderRowData(selectedItem)}</Text>
      </View>
    );
  };

  return (
    <SelectDropdown
      defaultButtonText={'Select Genre'}
      data={data}
      buttonStyle={buttonStyle}
      renderCustomizedRowChild={renderDropdownRow}
      rowStyle={{}}
      onSelect={(selectedItem, index) => {
        onDropdownItemSelect(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.name;
      }}
      rowTextForSelection={(item, index) => {
        return item.name;
      }}
      dropdownIconPosition={'right'}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    width: 500,
    padding: 10,
    flex: 4,
  },
});

export default CustomDropDown;
