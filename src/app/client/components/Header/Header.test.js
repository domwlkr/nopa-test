import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const loggedIn = true;
const bank = {name: 'Barclays', logo: 'test-file-stub'};
const onLogoutClick = jest.fn();

test('Renders correctly', () => {
  const header = renderer.create(
    <Header loggedIn={loggedIn} bank={bank} onLogoutClick={onLogoutClick} />
  ).toJSON();

  expect(header).toMatchSnapshot();
});

test('When login button is clicked event fired', () => {
  const header = shallow(
    <Header loggedIn={loggedIn} bank={bank} onLogoutClick={onLogoutClick} />
  );

  header.find('Button').simulate('click');

  expect(onLogoutClick).toHaveBeenCalled();
});