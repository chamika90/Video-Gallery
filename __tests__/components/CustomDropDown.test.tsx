import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import CustomDropDown from '../../src/components/CustomDropDown';
import {IGenre} from '../../src/types/storeType';

describe('CustomDropDown', () => {
  const data = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const renderRowData = (item: IGenre) => {
    return item;
  };

  const buttonStyle = {width: '60%'};
  const onDropdownItemSelect = () => {};

  it('should match snapshot', async () => {
    const {toJSON} = render(
      <CustomDropDown
        data={data}
        renderRowData={renderRowData}
        buttonStyle={buttonStyle}
        onDropdownItemSelect={onDropdownItemSelect}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
