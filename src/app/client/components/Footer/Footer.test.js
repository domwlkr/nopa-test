import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

test('Renders correctly', () => {
  const footer = renderer.create(
    <Footer />
  ).toJSON();

  expect(footer).toMatchSnapshot();
});
