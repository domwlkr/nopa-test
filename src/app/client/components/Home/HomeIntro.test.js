import React from 'react';
import HomeIntro from './HomeIntro';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const homeIntro = renderer.create(
    <HomeIntro />
  ).toJSON();

  expect(homeIntro).toMatchSnapshot();
});