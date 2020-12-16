import React from 'react';
import {create} from 'react-test-renderer';
import MainScreen from '../src/MainScreen';

const tree = create(<MainScreen />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

/**
 * this will create new file snapshot to compare in the future. 
 * Then, we use 'yarn test -u' toupdate the snapshot
 */