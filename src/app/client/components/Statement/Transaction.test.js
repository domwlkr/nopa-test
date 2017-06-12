import React from 'react';
import Transaction from './Transaction';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const singleTransaction = {'id': 1, 'dateStr': 'Now', 'beneficary': 'PAYPAL ZARA', 'value': '- £35.98'};

test('Renders correctly', () => {
  const transaction = renderer.create(
    <Transaction transaction={singleTransaction} />
  ).toJSON();

  expect(transaction).toMatchSnapshot();
});

test('Displays the correct beneficary', () => {
  const transaction = shallow(
    <Transaction transaction={singleTransaction} />
  );

  expect(transaction.instance().props.transaction.beneficary).toEqual('PAYPAL ZARA');
});

test('Displays the correct value', () => {
  const transaction = shallow(
    <Transaction transaction={singleTransaction} />
  );

  expect(transaction.instance().props.transaction.value).toEqual('- £35.98');
});