import React from 'react';
import { ErrorPage } from './ErrorPage';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';
import renderer from 'react-test-renderer';

const store = configureStore();

test('Renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><ErrorPage route={{ error: '404' }} /></Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
