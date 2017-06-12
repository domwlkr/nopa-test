import React from 'react';
import HomeSecondary from './HomeSecondary';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const homeSecondary = renderer.create(
    <HomeSecondary />
  ).toJSON();

  expect(homeSecondary).toMatchSnapshot();
});