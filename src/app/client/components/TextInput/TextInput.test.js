import React from 'react';
import TextInput from './TextInput';
import renderer from 'react-test-renderer';

const label = 'Surname';
const name = 'surname';
const handleChange = jest.fn();

test('Renders correctly', () => {
  const textInput = renderer.create(
    <TextInput name={name} label={label} handleChange={handleChange} />
  ).toJSON();

  expect(textInput).toMatchSnapshot();
});