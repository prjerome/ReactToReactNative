import 'react-native';
import React from 'react';
import Business from '../src/components/Business/Business';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Business />);
});
