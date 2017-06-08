import React from 'react';
import { LoginPage } from './LoginPage';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';
import renderer from 'react-test-renderer';

const store = configureStore();

test('Renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><LoginPage /></Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
