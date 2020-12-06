import 'react-native';
import React from 'react';
import Searchbar from '../src/components/Searchbar/Searchbar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Searchbar />);
});
