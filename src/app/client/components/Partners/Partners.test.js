import React from 'react';
import Partners from './Partners';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const partners = renderer.create(
    <Partners />
  ).toJSON();

  expect(partners).toMatchSnapshot();
});