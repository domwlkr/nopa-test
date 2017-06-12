import React from 'react';
import LoginForm from './LoginForm';
import renderer from 'react-test-renderer';

const handleSubmit = jest.fn();
const handleChange = jest.fn();
const errors = {};

test('Renders correctly', () => {
  const loginForm = renderer.create(
    <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
  ).toJSON();

  expect(loginForm).toMatchSnapshot();
});