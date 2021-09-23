import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import SearchBar from '../../src/components/SearchBar';

describe('SearchBar', () => {
  it('should match snapshot', async () => {
    const {toJSON} = render(
      <SearchBar
        placeholder={'search'}
        onTextChange={() => {
          console.log('on text changed');
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should display text as search', async () => {
    const {getAllByPlaceholderText} = render(
      <SearchBar
        placeholder={'search'}
        onTextChange={() => {
          console.log('on text changed');
        }}
      />,
    );

    expect(getAllByPlaceholderText('search').length).toBe(1);
  });
});
