import React from 'react';
import Layout from './Layout';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/configureStore';
import renderer from 'react-test-renderer';

const title = "Title";
const routeClass = "home";
const loggedIn = true;
const bank = {name: 'Barclays', logo: 'test-file-stub'};
const logOut = jest.fn();

const store = configureStore();

test('Renders correctly', () => {
  const layout = renderer.create(
    <Provider store={store}><Layout title={title} routeClass={routeClass} loggedIn={loggedIn} bank={bank} logOut={logOut} /></Provider>
  ).toJSON();

  expect(layout).toMatchSnapshot();
});