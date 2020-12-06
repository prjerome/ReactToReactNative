import 'react-native';
import React from 'react';
import BusinessList from '../src/components/BusinessList/BusinessList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<BusinessList />);
});
