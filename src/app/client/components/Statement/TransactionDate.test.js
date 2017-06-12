import React from 'react';
import TransactionDate from './TransactionDate';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const dateArray = [{'id': 1, 'dateStr': 'Now', 'beneficary': 'PAYPAL ZARA', 'value': '- £35.98'}];

test('Renders correctly', () => {
  const transactionDate = renderer.create(
    <TransactionDate date={dateArray} />
  ).toJSON();

  expect(transactionDate).toMatchSnapshot();
});

test('Displays the correct date', () => {
  const transactionDate = shallow(
    <TransactionDate date={dateArray} />
  );

  expect(transactionDate.instance().props.date[0].dateStr).toEqual('Now');
});