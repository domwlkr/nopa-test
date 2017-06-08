import React from 'react';
import { HomePage } from './HomePage';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';
import renderer from 'react-test-renderer';

const store = configureStore();

test('Renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><HomePage /></Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
